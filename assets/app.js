(() => {
  "use strict";

  const docs = window.FBREACH_DOCS;
  const main = document.getElementById("mainContent");
  const sidebarGroups = document.getElementById("sidebarGroups");
  const docsVersion = document.getElementById("docsVersion");
  const searchTrigger = document.getElementById("searchTrigger");
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const themeToggle = document.getElementById("themeToggle");
  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  const toast = document.getElementById("toast");

  if (!docs) {
    main.innerHTML = '<div class="loading-state"><p>Documentation data could not be loaded.</p></div>';
    return;
  }

  const allEndpoints = [];
  const endpointMap = new Map();
  docs.groups.forEach(function (group) {
    group.endpoints.forEach(function (endpoint) {
      allEndpoints.push(endpoint);
      endpointMap.set(endpoint.id, endpoint);
    });
  });

  const state = {
    codeTab: "curl",
    baseUrl: localStorage.getItem("fbreach_docs_base_url") || docs.meta.defaultBaseUrl,
    apiToken: "",
    searchSelection: 0
  };

  const icons = {
    chevron: '<svg class="chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
    breadcrumb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-8 12h7l-1 8 8-12h-7z"/></svg>',
    layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 7 4 4-4 4M11 17h7"/></svg>'
  };

  const profileConfig = {
    liveness: ["liveness", "object"],
    readiness: ["readiness", "object"],
    source: ["source", "object"],
    source_list: ["source", "drf_list"],
    source_data: ["source", "data_object"],
    source_data_list: ["source", "data_list"],
    source_mutation: ["source", "source_mutation"],
    session: ["session", "object"],
    session_list: ["session", "drf_list"],
    capture_availability: ["capture_availability", "object"],
    capture_job: ["capture_job", "object"],
    capture_job_list: ["capture_job", "drf_list"],
    verify_session: ["verify_session", "object"],
    provider_health: ["provider_health", "object"],
    provider_health_list: ["provider_health", "drf_list"],
    crawl_job: ["crawl_job", "object"],
    crawl_job_list: ["crawl_job", "drf_list"],
    crawl_schedule: ["crawl_schedule", "object"],
    crawl_schedule_list: ["crawl_schedule", "drf_list"],
    record: ["record", "object"],
    record_data: ["record", "data_object"],
    record_list: ["record", "drf_list"],
    media_asset: ["media_asset", "object"],
    media_asset_list: ["media_asset", "drf_list"],
    engagement_snapshot: ["engagement_snapshot", "object"],
    engagement_snapshot_list: ["engagement_snapshot", "drf_list"],
    capability_list: ["capability", "array"],
    workspace_record_list: ["workspace_record_card", "workspace_list"],
    workspace_media_list: ["media_asset", "workspace_list"],
    workspace_snapshot_list: ["engagement_snapshot", "workspace_list"],
    source_workspace: ["source_workspace", "object"],
    post_workspace: ["post_workspace", "object"],
    session_workspace: ["session_workspace", "object"],
    collection_start: ["crawl_job", "collection_start"],
    collection_status: ["crawl_job", "collection_status"],
    collection_task: ["crawl_job", "collection_task"],
    source_monitor: ["source_monitor", "object"],
    source_monitor_action: ["source_monitor_action", "object"],
    error: ["error", "object"],
    empty: [null, "empty"],
    api_index: ["generic", "index"],
    operational_health: ["generic", "operational_health"],
    search_result: ["record", "search"],
    generic: ["generic", "object"]
  };

  function esc(value) {
    return String(value === null || value === undefined ? "" : value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function methodClass(method) {
    return String(method || "").toLowerCase();
  }

  function basePath(endpoint) {
    return String(endpoint.path || "").split("?")[0] || "/";
  }

  function humanize(value) {
    return String(value || "")
      .replaceAll("_", " ")
      .replaceAll(".", " › ")
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function fieldDescription(name) {
    if (docs.fieldDescriptions[name]) return docs.fieldDescriptions[name];
    const leaf = String(name).split(".").pop().replace(/\[\]$/, "");
    if (docs.fieldDescriptions[leaf]) return docs.fieldDescriptions[leaf];
    return humanize(leaf) + " returned by FacebookReach for this resource.";
  }

  function cleanDescription(text, endpoint) {
    let value = String(text || "").trim();
    value = value
      .replace(/Authentication is inherited(?: from the collection)? as Authorization: Token \{\{api_token\}\}\.?/gi, "")
      .replace(/Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending\.?/gi, "")
      .replace(/All request inputs are request-local path\/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending\.?/gi, "")
      .replace(/Endpoint:\s*[^.]+\.?$/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    if (!value || value === endpoint.name || value.indexOf(endpoint.name + ".") === 0) {
      const group = docs.groups.find(function (g) { return g.sourceTitle === endpoint.group; });
      value = group && group.description ? group.description : "Use this endpoint to work with the selected FacebookReach resource.";
    }
    return value;
  }

  function statusLabel(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code === 304) return "Not modified";
    if (code === 400) return "Validation error";
    if (code === 401) return "Authentication required";
    if (code === 403) return "Permission denied";
    if (code === 404) return "Not found";
    if (code === 409) return "Conflict";
    if (code === 429) return "Rate limited";
    if (code === 503) return "Unavailable";
    return code >= 500 ? "Server error" : "Response";
  }

  function statusClass(code) {
    if (code >= 200 && code < 400) return "ok";
    if (code >= 400 && code < 500) return "client";
    return "server";
  }

  function inferredStatusCodes(endpoint) {
    if (endpoint.statusCodes && endpoint.statusCodes.length) return endpoint.statusCodes;
    if (endpoint.method === "POST") return [201, 400];
    if (endpoint.method === "DELETE") return [204, 404];
    return [200];
  }

  function renderSidebar() {
    docsVersion.textContent = docs.meta.endpointCount + " endpoints · " + docs.meta.groupCount + " sections";
    sidebarGroups.innerHTML = docs.groups.map(function (group) {
      const items = group.endpoints.map(function (endpoint) {
        return '<a class="nav-link endpoint-nav" href="#endpoint/' + encodeURIComponent(endpoint.id) + '" data-route="' + esc(endpoint.id) + '">' +
          '<span class="method-mini ' + methodClass(endpoint.method) + '">' + esc(endpoint.method) + '</span>' +
          '<span class="label">' + esc(endpoint.name) + '</span></a>';
      }).join("");
      return '<section class="sidebar-group"><button class="sidebar-group-title" type="button"><span>' +
        esc(group.title) + '</span>' + icons.chevron + '</button><div class="sidebar-items">' + items + '</div></section>';
    }).join("");

    document.querySelectorAll(".sidebar-group-title").forEach(function (button) {
      button.addEventListener("click", function () {
        button.closest(".sidebar-group").classList.toggle("collapsed");
      });
    });
  }

  function setActiveNav(route) {
    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.classList.remove("active");
    });
    let current = null;
    if (route === "overview") {
      current = document.querySelector('.nav-link[data-route="overview"]');
    } else {
      current = Array.from(document.querySelectorAll(".endpoint-nav")).find(function (link) {
        return link.dataset.route === route;
      });
    }
    if (current) {
      current.classList.add("active");
      current.scrollIntoView({ block: "nearest" });
    }
  }

  function routeFromHash() {
    const hash = location.hash.replace(/^#/, "");
    if (!hash || hash === "overview") return { type: "overview" };
    if (hash.indexOf("endpoint/") === 0) {
      return { type: "endpoint", id: decodeURIComponent(hash.slice("endpoint/".length)) };
    }
    return { type: "overview" };
  }

  function render() {
    const route = routeFromHash();
    if (route.type === "endpoint" && endpointMap.has(route.id)) {
      renderEndpoint(endpointMap.get(route.id));
      setActiveNav(route.id);
    } else {
      renderOverview();
      setActiveNav("overview");
    }
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function overviewCard(icon, title, text) {
    return '<article class="overview-card"><div class="card-icon">' + icon + '</div><h3>' + esc(title) + '</h3><p>' + esc(text) + '</p></article>';
  }

  function quickStep(number, title, text) {
    return '<div class="quickstep"><span class="step-number">' + esc(number) + '</span><div><strong>' +
      esc(title) + '</strong><span>' + esc(text) + '</span></div></div>';
  }

  function conventionRow(name, type, description) {
    return '<div class="param-row"><div><div class="param-name"><code>' + esc(name) +
      '</code><span class="type-pill">' + esc(type) + '</span></div></div><div class="param-description"><p>' +
      esc(description) + '</p></div></div>';
  }

  function renderOverview() {
    const exampleUrl = state.baseUrl.replace(/\/$/, "") + "/api/v1/capabilities/";
    const firstCurl = 'curl --request GET \\\n  --url "' + exampleUrl + '" \\\n  --header "Authorization: Token YOUR_API_TOKEN"';

    main.innerHTML =
      '<div class="overview">' +
        '<div class="overview-hero"><span class="eyebrow">FacebookReach Developer Platform</span>' +
          '<h1>Facebook data collection APIs, documented for production integration.</h1>' +
          '<p class="lead">Use FacebookReach to start collection jobs, read normalized Facebook data, monitor registered sources, operate authorized sessions, inspect provider health, and navigate source, post, and session workspaces.</p>' +
          '<div class="hero-badges"><span class="hero-badge">' + docs.meta.endpointCount + ' documented endpoints</span>' +
            '<span class="hero-badge">' + docs.meta.groupCount + ' API sections</span>' +
            '<span class="hero-badge">Token authentication</span>' +
            '<span class="hero-badge">Static HTML · CSS · JavaScript</span></div></div>' +
        '<div class="overview-grid">' +
          overviewCard(icons.lock, "Authentication", "Send Authorization: Token <api_token> with authenticated requests. Real credentials are never embedded in this documentation.") +
          overviewCard(icons.bolt, "Asynchronous collection", "Collection, capture, verification, monitoring, and crawl operations can queue background work. Follow the related status resource until completion.") +
          overviewCard(icons.layers, "Normalized data graph", "Read cached records and workspace views without forcing a live Facebook scrape on every consumer request.") +
        '</div>' +
        '<div class="quickstart"><div class="quickstart-copy"><span class="eyebrow">Quick start</span><h2>Make your first request</h2>' +
          '<p>Configure the service base URL and your API token, then send endpoint-specific path and query parameters.</p>' +
          '<div class="quickstart-steps">' +
            quickStep("1", "Set the base URL", "Use your local, staging, or production FacebookReach service.") +
            quickStep("2", "Authenticate", "Send the DRF token in the Authorization header.") +
            quickStep("3", "Choose an endpoint", "Use the sidebar or Ctrl/⌘K search to locate the API surface.") +
            quickStep("4", "Follow async work", "Poll the returned job, task, source, or capture status when applicable.") +
          '</div></div>' +
          '<div class="code-card"><div class="code-toolbar"><div class="code-title">' + icons.terminal + ' First request</div>' +
            '<div class="code-actions"><button data-copy="' + esc(firstCurl) + '" aria-label="Copy example">' + icons.copy + '</button></div></div>' +
            '<pre><code>' + highlightShell(firstCurl) + '</code></pre></div></div>' +
        '<div class="section"><h2>Core conventions</h2><div class="param-list">' +
          conventionRow("base_url", "string", "FacebookReach service root. Each endpoint appends its own API path.") +
          conventionRow("api_token", "secret", "Django REST Framework token sent as Authorization: Token <api_token>. Never publish or commit a real token.") +
          conventionRow("cursor / limit", "pagination", "Workspace section endpoints use cursor pagination. Treat cursor values as opaque.") +
          conventionRow("job status", "async", "A successful POST can acknowledge queued work before Facebook collection is complete. Use the related status/detail resource as the source of truth.") +
        '</div></div>' +
      '</div>';

    bindCopyButtons();
  }

  function renderEndpoint(endpoint) {
    const group = docs.groups.find(function (g) { return g.sourceTitle === endpoint.group; });
    const codes = inferredStatusCodes(endpoint);
    const pathOnly = basePath(endpoint);

    main.innerHTML =
      '<div class="doc-layout"><article class="doc-content">' +
        '<div class="breadcrumbs"><a href="#overview">API Reference</a>' + icons.breadcrumb +
          '<span>' + esc(group ? group.title : endpoint.group) + '</span>' + icons.breadcrumb +
          '<strong>' + esc(endpoint.name) + '</strong></div>' +
        '<span class="eyebrow">' + esc(group ? group.title : "API endpoint") + '</span>' +
        '<h1>' + esc(endpoint.name) + '</h1>' +
        '<p class="lead">' + esc(cleanDescription(endpoint.description, endpoint)) + '</p>' +
        '<div class="endpoint-path"><span class="method-badge ' + methodClass(endpoint.method) + '">' + esc(endpoint.method) + '</span>' +
          '<code>' + esc(pathOnly) + '</code><button class="copy-icon" type="button" data-copy="' + esc(pathOnly) +
          '" aria-label="Copy endpoint path">' + icons.copy + '</button></div>' +
        renderAuthSection() +
        ((endpoint.pathParams || []).length ? renderParams("Path parameters", endpoint.pathParams, "Path values replace placeholders in the endpoint URL.", "path") : "") +
        ((endpoint.query || []).length ? renderParams("Query parameters", endpoint.query, "Query parameters control targets, limits, filters, monitoring, or collection behavior.", "query") : "") +
        renderHeaders(endpoint) +
        renderBody(endpoint) +
        renderStatusSection(codes) +
        renderResponseFields(endpoint) +
        renderIntegrationNotes(endpoint) +
      '</article><aside class="code-column"><div class="code-column-inner">' +
        renderConfigCard() + renderRequestCodeCard(endpoint) + renderResponseExampleCard(endpoint, codes) +
      '</div></aside></div>';

    bindEndpointInteractions(endpoint);
  }

  function renderAuthSection() {
    return '<section class="section"><h2>Authorization</h2><p class="section-intro">Authenticated requests use Django REST Framework token authentication.</p>' +
      '<div class="auth-card"><div class="auth-row"><strong>Header</strong><code>Authorization: Token &lt;api_token&gt;</code></div>' +
      '<div class="auth-row"><strong>Credential</strong><p>Use a token issued for the FacebookReach account making the request. Operator-only mutations can return <code>403</code> for ordinary authenticated users.</p></div></div></section>';
  }

  function renderParams(title, params, intro, location) {
    return '<section class="section"><h2>' + esc(title) + '</h2><p class="section-intro">' + esc(intro) + '</p><div class="param-list">' +
      params.map(function (param) {
        const isRequired = location === "path" || param.requirement === "required";
        const conditional = param.requirement === "conditional";
        const requirement = isRequired
          ? '<span class="required-pill">required</span>'
          : '<span class="optional-pill">' + (conditional ? "conditional" : "optional") + '</span>';
        const disabled = param.disabled ? '<span class="optional-pill">disabled in example</span>' : "";
        const example = param.value !== ""
          ? '<div class="param-example">Example: <code>' + esc(param.value) + '</code></div>'
          : "";
        return '<div class="param-row"><div><div class="param-name"><code>' + esc(param.key) + '</code>' +
          '<span class="type-pill">' + esc(param.type || "string") + '</span>' + requirement + disabled +
          '</div><div class="param-location">' + esc(location) + '</div></div>' +
          '<div class="param-description"><p>' + esc(param.description || fieldDescription(param.key)) + '</p>' + example + '</div></div>';
      }).join("") + '</div></section>';
  }

  function renderHeaders(endpoint) {
    const headers = [{ key: "Authorization", value: "Token <api_token>", description: "DRF token used to authenticate the FacebookReach request." }]
      .concat(endpoint.headers || []);
    const seen = new Set();
    const unique = headers.filter(function (header) {
      const key = String(header.key || "").toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return '<section class="section"><h2>Headers</h2><div class="param-list">' +
      unique.map(function (header) {
        return '<div class="param-row"><div><div class="param-name"><code>' + esc(header.key) +
          '</code><span class="type-pill">header</span></div></div><div class="param-description"><p>' +
          esc(header.description || "HTTP request header.") + '</p><div class="param-example">Value: <code>' +
          esc(header.value) + '</code></div></div></div>';
      }).join("") + '</div></section>';
  }

  function renderBody(endpoint) {
    if (endpoint.body && endpoint.body.raw) {
      return '<section class="section"><h2>Body</h2><div class="code-card"><pre><code>' +
        highlightJson(endpoint.body.raw) + '</code></pre></div></section>';
    }
    const write = ["POST", "PUT", "PATCH"].indexOf(endpoint.method) >= 0;
    return '<section class="section"><h2>Body</h2><div class="note-card">' +
      (write
        ? '<strong>No JSON body is required by this Postman example.</strong> Request inputs are supplied as the documented path/query parameters. Compatible backend write endpoints can also accept body fields; where both are supplied, body fields take precedence when implemented.'
        : '<strong>No request body.</strong> Send the documented path/query parameters and authentication header.') +
      '</div></section>';
  }

  function renderStatusSection(codes) {
    return '<section class="section"><h2>HTTP responses</h2><p class="section-intro">The canonical Postman contract accepts the following status codes for this request.</p>' +
      '<div class="status-list">' + codes.map(function (code) {
        return '<span class="status-chip ' + statusClass(code) + '"><span class="status-dot"></span><strong>' +
          code + '</strong> ' + esc(statusLabel(code)) + '</span>';
      }).join("") + '</div></section>';
  }

  function prefixedFields(prefix, fields) {
    return (fields || []).map(function (field) {
      return {
        name: prefix + field.name,
        type: field.type,
        description: fieldDescription(field.name)
      };
    });
  }

  function responseRows(endpoint) {
    const config = profileConfig[endpoint.responseProfile] || profileConfig.generic;
    const schemaName = config[0];
    const shape = config[1];
    if (shape === "empty") return [];
    const schema = schemaName ? docs.schemas[schemaName] : null;
    const fields = schema && schema.fields ? schema.fields : [];

    if (shape === "drf_list") {
      return [
        { name: "count", type: "integer", description: "Total number of matching records available to the standard DRF paginator." },
        { name: "next", type: "url|null", description: "URL for the next result page, or null when no next page exists." },
        { name: "previous", type: "url|null", description: "URL for the previous result page, or null when no previous page exists." },
        { name: "results", type: "array<object>", description: "Current page of serialized resources." }
      ].concat(prefixedFields("results[].", fields));
    }

    if (shape === "workspace_list") {
      const pagination = docs.schemas.workspace_pagination ? docs.schemas.workspace_pagination.fields : [];
      return [
        { name: "results", type: "array<object>", description: "Current cursor page of compact workspace resources." }
      ].concat(prefixedFields("results[].", fields)).concat(pagination.map(function (field) {
        return { name: field.name, type: field.type, description: fieldDescription(field.name) };
      }));
    }

    if (shape === "array") return prefixedFields("[].", fields);

    if (shape === "data_object") {
      return [{ name: "data", type: "object", description: "Response payload wrapper." }].concat(prefixedFields("data.", fields));
    }

    if (shape === "data_list") {
      return [
        { name: "data", type: "object", description: "Response payload wrapper." },
        { name: "data.items", type: "array<object>", description: "Cached resources returned for the collection request." }
      ].concat(prefixedFields("data.items[].", fields));
    }

    if (shape === "source_mutation") {
      return [
        { name: "source", type: "object", description: "Created or updated Facebook source resource." }
      ].concat(prefixedFields("source.", fields)).concat([
        { name: "monitoring", type: "object", description: "Monitoring and bootstrap state associated with the source." },
        { name: "monitoring.enabled", type: "boolean", description: "Whether recurring source monitoring is enabled." },
        { name: "monitoring.status", type: "string", description: "Monitoring lifecycle state after the mutation." },
        { name: "monitoring.bootstrap_batch", type: "uuid|null", description: "Bootstrap batch identifier when an initial bootstrap was queued." },
        { name: "monitoring.bootstrap_job_ids", type: "array<uuid>", description: "CrawlJob UUIDs queued for source bootstrap." },
        { name: "monitoring.schedule_ids", type: "array<integer>", description: "Recurring CrawlSchedule IDs created for the monitored source." },
        { name: "links", type: "object", description: "Convenience API paths for the source and monitor controls." }
      ]);
    }

    if (shape === "collection_start") {
      return [
        { name: "data", type: "object", description: "Collection operation result envelope." },
        { name: "data.status", type: "string", description: "Immediate asynchronous state, commonly pending." },
        { name: "data.jobs", type: "array<object>", description: "Crawl jobs queued for the requested update." }
      ].concat(prefixedFields("data.jobs[].", fields)).concat([
        { name: "data.auto_update", type: "array<object>", description: "Recurring schedules created when auto-update parameters were requested." }
      ]);
    }

    if (shape === "collection_status") {
      return [
        { name: "data", type: "object", description: "Latest cached status for the collection request." },
        { name: "data.jobs", type: "array<object>", description: "Related crawl jobs and their current execution state." }
      ].concat(prefixedFields("data.jobs[].", fields));
    }

    if (shape === "collection_task") {
      return [
        { name: "data", type: "object", description: "Collection task response envelope." },
        { name: "data.items", type: "array<object>", description: "Update or auto-update task resources." }
      ].concat(prefixedFields("data.items[].", fields));
    }

    if (shape === "index") {
      return [
        { name: "name", type: "string", description: "Human-readable API index name." },
        { name: "version", type: "string", description: "API/index version when exposed." },
        { name: "endpoints", type: "object", description: "Map of discoverable FacebookReach endpoint paths." }
      ];
    }

    if (shape === "operational_health") {
      return [
        { name: "status", type: "string", description: "Aggregate operational health state." },
        { name: "checks", type: "object", description: "Named dependency/provider health checks returned by the service." }
      ];
    }

    if (shape === "search") {
      return [
        { name: "count", type: "integer", description: "Number of Elasticsearch matches represented by the response." },
        { name: "results", type: "array<object>", description: "Normalized search hits." }
      ].concat(prefixedFields("results[].", fields));
    }

    return fields.map(function (field) {
      return { name: field.name, type: field.type, description: fieldDescription(field.name) };
    });
  }

  function renderResponseFields(endpoint) {
    const rows = responseRows(endpoint);
    if (!rows.length) {
      return '<section class="section"><h2>Response fields</h2><div class="note-card"><strong>No response body.</strong> A successful delete/cancel operation can return an empty body, such as HTTP 204.</div></section>';
    }
    return '<section class="section"><h2>Response fields</h2><p class="section-intro">Stable serializer and workspace fields are described below. Nested metadata/payload objects can contain provider-specific data where explicitly exposed.</p>' +
      '<div class="response-schema-table">' + rows.map(function (row) {
        return '<div class="response-field"><div><code>' + esc(row.name) + '</code><div class="response-meta"><span class="type-pill">' +
          esc(row.type || "value") + '</span></div></div><p>' + esc(row.description || fieldDescription(row.name)) + '</p></div>';
      }).join("") + '</div></section>';
  }

  function renderIntegrationNotes(endpoint) {
    const notes = [];
    if ((endpoint.query || []).some(function (q) { return q.key === "facebook_session"; })) {
      notes.push("When facebook_session is optional, leaving it disabled or omitted allows FacebookReach to choose a usable authorized session automatically where supported.");
    }
    if (endpoint.responseProfile.indexOf("workspace_") === 0 || (endpoint.query || []).some(function (q) { return q.key === "cursor"; })) {
      notes.push("Workspace cursor values are opaque. Pass the returned next_cursor or previous_cursor unchanged.");
    }
    if (["POST", "PUT", "PATCH", "DELETE"].indexOf(endpoint.method) >= 0) {
      notes.push("Mutation permissions can be stricter than read permissions. Source and session management can require an operator, administrator, or superuser account.");
    }
    if (endpoint.responseProfile.indexOf("collection") >= 0 || endpoint.responseProfile === "crawl_job" || endpoint.responseProfile === "source_mutation") {
      notes.push("A successful request can represent queued asynchronous work. Follow the returned job, task, source, or monitoring status before depending on newly collected data.");
    }
    if (!notes.length) return "";
    return '<section class="section"><h2>Integration notes</h2>' + notes.map(function (note) {
      return '<div class="note-card accent" style="margin-top:10px">' + esc(note) + '</div>';
    }).join("") + '</section>';
  }

  function renderConfigCard() {
    return '<div class="config-card"><h3>Code example settings</h3><div class="field-stack">' +
      '<label>Base URL<input id="baseUrlInput" type="url" spellcheck="false" value="' + esc(state.baseUrl) + '"></label>' +
      '<label>API token<input id="apiTokenInput" type="password" autocomplete="off" placeholder="YOUR_API_TOKEN" value="' + esc(state.apiToken) + '"></label>' +
      '</div><p class="muted small" style="margin:9px 0 0">The token is kept only in this browser page session and is never committed to the documentation repository.</p></div>';
  }

  function requestUrl(endpoint) {
    let path = basePath(endpoint);
    (endpoint.pathParams || []).forEach(function (param) {
      path = path.replace(":" + param.key, encodeURIComponent(String(param.value === undefined ? "" : param.value)));
    });
    const query = (endpoint.query || []).filter(function (param) {
      return !param.disabled;
    }).map(function (param) {
      return encodeURIComponent(param.key) + "=" + encodeURIComponent(String(param.value === undefined ? "" : param.value));
    }).join("&");
    return state.baseUrl.replace(/\/$/, "") + path + (query ? "?" + query : "");
  }

  function tokenValue() {
    return state.apiToken || "YOUR_API_TOKEN";
  }

  function shellQuote(value) {
    return "'" + String(value).replaceAll("'", "'\\''") + "'";
  }

  function buildSnippet(endpoint, language) {
    const url = requestUrl(endpoint);
    const headers = [["Authorization", "Token " + tokenValue()]].concat(
      (endpoint.headers || []).filter(function (h) { return !h.disabled; }).map(function (h) { return [h.key, h.value]; })
    );
    const body = endpoint.body && endpoint.body.raw ? endpoint.body.raw : "";

    if (language === "python") {
      const headerObject = {};
      headers.forEach(function (h) { headerObject[h[0]] = h[1]; });
      let code = "import requests\n\n";
      code += "url = " + JSON.stringify(url) + "\n";
      code += "headers = " + JSON.stringify(headerObject, null, 4) + "\n";
      if (body) {
        code += "payload = " + body + "\n\n";
        code += "response = requests." + endpoint.method.toLowerCase() + "(url, headers=headers, json=payload)\n";
      } else {
        code += "\nresponse = requests." + endpoint.method.toLowerCase() + "(url, headers=headers)\n";
      }
      code += "response.raise_for_status()\n";
      code += "print(response.json() if response.content else None)";
      return code;
    }

    if (language === "javascript") {
      const headerObject = {};
      headers.forEach(function (h) { headerObject[h[0]] = h[1]; });
      let code = "const response = await fetch(" + JSON.stringify(url) + ", {\n";
      code += "  method: " + JSON.stringify(endpoint.method) + ",\n";
      code += "  headers: " + JSON.stringify(headerObject, null, 2).replace(/^/gm, "  ").trimStart();
      if (body) code += ",\n  body: JSON.stringify(" + body + ")";
      code += "\n});\n\n";
      code += 'if (!response.ok) throw new Error("HTTP " + response.status);\n';
      code += "const data = response.status === 204 ? null : await response.json();\n";
      code += "console.log(data);";
      return code;
    }

    let code = "curl --request " + endpoint.method + " \\\n";
    code += "  --url " + shellQuote(url);
    headers.forEach(function (header) {
      code += " \\\n  --header " + shellQuote(header[0] + ": " + header[1]);
    });
    if (body) code += " \\\n  --data " + shellQuote(body);
    return code;
  }

  function renderRequestCodeCard(endpoint) {
    return '<div class="code-card request-code-card"><div class="code-toolbar"><div class="code-tabs">' +
      codeTab("curl", "cURL") + codeTab("python", "Python") + codeTab("javascript", "JavaScript") +
      '</div><div class="code-actions"><button id="copyRequestCode" aria-label="Copy request code">' + icons.copy + '</button></div></div>' +
      '<pre><code id="requestCode">' + highlightCode(buildSnippet(endpoint, state.codeTab), state.codeTab) + '</code></pre></div>';
  }

  function codeTab(id, label) {
    return '<button class="code-tab ' + (state.codeTab === id ? "active" : "") + '" type="button" data-code-tab="' +
      id + '">' + esc(label) + '</button>';
  }

  function exampleObject(schemaName) {
    const schema = docs.schemas[schemaName];
    if (!schema || !schema.fields) return {};
    const result = {};
    schema.fields.forEach(function (field) {
      if (field.name.indexOf(".") < 0) result[field.name] = field.example;
    });
    return result;
  }

  function responseExample(endpoint) {
    const config = profileConfig[endpoint.responseProfile] || profileConfig.generic;
    const schemaName = config[0];
    const shape = config[1];
    if (shape === "empty") return "";

    const object = schemaName ? exampleObject(schemaName) : { detail: "Example response" };
    let result = object;

    if (shape === "drf_list") result = { count: 1, next: null, previous: null, results: [object] };
    if (shape === "workspace_list") {
      result = { results: [object], pagination: { limit: 20, next_cursor: null, previous_cursor: null, has_more: false, has_previous: false } };
    }
    if (shape === "array") result = [object];
    if (shape === "data_object") result = { data: object };
    if (shape === "data_list") result = { data: { items: [object] } };
    if (shape === "source_mutation") {
      result = {
        source: object,
        monitoring: {
          enabled: true,
          status: "bootstrapping",
          bootstrap_batch: "88888888-8888-4888-8888-888888888888",
          bootstrap_job_ids: ["44444444-4444-4444-8444-444444444444"],
          schedule_ids: [101]
        },
        links: {
          self: "/api/v1/sources/33333333-3333-4333-8333-333333333333/",
          monitor: "/api/v1/sources/33333333-3333-4333-8333-333333333333/monitor/"
        }
      };
    }
    if (shape === "collection_start") result = { data: { status: "pending", jobs: [object], auto_update: [] } };
    if (shape === "collection_status") result = { data: { jobs: [object] } };
    if (shape === "collection_task") result = { data: { items: [object] } };
    if (shape === "index") result = { name: "FacebookReach API", version: "v1", endpoints: { collection: "/api/v1/facebook/collection/", capabilities: "/api/v1/capabilities/" } };
    if (shape === "operational_health") result = { status: "healthy", checks: { database: "ok", redis: "ok", search: "ok" } };
    if (shape === "search") result = { count: 1, results: [object] };

    if (schemaName === "source_workspace" && shape === "object") {
      result = {
        source: {
          id: "33333333-3333-4333-8333-333333333333",
          source_type: "page",
          external_id: "228735667216",
          username: "bbcnews",
          name: "BBC News",
          canonical_url: "https://www.facebook.com/bbcnews",
          profile_picture_url: "https://example.com/profile.jpg",
          description: "News and current affairs.",
          is_verified: true,
          followers_count: 64000000,
          following_count: 75,
          friends_count: null
        },
        monitoring: {
          enabled: true,
          status: "active",
          download_media: true,
          monitoring_interval_minutes: 1,
          last_crawled_at: "2026-09-22T12:00:00Z",
          last_monitor_run_at: "2026-09-22T12:00:00Z"
        },
        stats: {
          status: "ready",
          posts: 120,
          comments: 430,
          replies: 95,
          reactions: 120,
          reactors: 850,
          shares: 40,
          media: 180,
          friends: 0,
          groups: 0,
          events: 3,
          latest_post_at: "2026-09-22T11:30:00Z",
          latest_activity_at: "2026-09-22T12:00:00Z",
          last_rebuilt_at: "2026-09-22T12:00:00Z",
          refresh_queued: false
        },
        preview: { posts: [], media: [] },
        sections: { posts: { applicable: true, available: true, status: "success", count: 120, endpoint: "/api/v1/sources/.../posts/", last_collected_at: "2026-09-22T12:00:00Z" } },
        collection: { info_capability: "page.info", posts_capability: "page.posts", running_jobs: 0, failed_sections: [], completeness_percent: 100 },
        related_scopes: { session_workspace: null, sessions: "/api/v1/sessions/", global_search: "/api/v1/search/", note: "Viewer/session-scoped data is intentionally not attributed to this source." },
        snapshot: { version: "12ab34cd56ef78ab", source_updated_at: "2026-09-22T12:00:00Z", stats_updated_at: "2026-09-22T12:00:00Z" }
      };
    }

    return JSON.stringify(result, null, 2);
  }

  function renderResponseExampleCard(endpoint, codes) {
    const code = codes.find(function (c) { return c >= 200 && c < 300; }) || codes[0] || 200;
    const example = responseExample(endpoint);
    return '<div class="code-card"><div class="code-toolbar"><div class="code-title"><span class="status-dot" style="background:var(--green)"></span>' +
      code + ' ' + esc(statusLabel(code)) + '</div><div class="code-actions"><button data-copy="' + esc(example) +
      '" aria-label="Copy response example">' + icons.copy + '</button></div></div><pre><code>' +
      (example ? highlightJson(example) : '<span class="muted">No response body</span>') + '</code></pre></div>';
  }

  function highlightCode(code, language) {
    if (language === "curl") return highlightShell(code);
    return esc(code)
      .replace(/(&quot;.*?&quot;|'[^']*')/g, '<span class="token-string">$1</span>')
      .replace(/\b(true|false|null|None)\b/g, '<span class="token-bool">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>');
  }

  function highlightShell(code) {
    return esc(code)
      .replace(/('[^']*'|&quot;.*?&quot;)/g, '<span class="token-string">$1</span>')
      .replace(/\b(GET|POST|PUT|PATCH|DELETE|curl|request|url|header|data)\b/g, '<span class="token-key">$1</span>');
  }

  function highlightJson(json) {
    const source = typeof json === "string" ? json : JSON.stringify(json, null, 2);
    return esc(source)
      .replace(/(&quot;[^&]*?&quot;)(\s*:)?/g, function (match, token, colon) {
        return colon ? '<span class="token-key">' + token + '</span>' + colon : '<span class="token-string">' + token + '</span>';
      })
      .replace(/\b(true|false|null)\b/g, '<span class="token-bool">$1</span>')
      .replace(/(^|[^\w])(-?\d+(?:\.\d+)?)(?![\w])/g, '$1<span class="token-number">$2</span>');
  }

  function bindEndpointInteractions(endpoint) {
    bindCopyButtons();
    const baseInput = document.getElementById("baseUrlInput");
    const tokenInput = document.getElementById("apiTokenInput");
    const requestCode = document.getElementById("requestCode");
    const copyRequestCode = document.getElementById("copyRequestCode");

    function updateRequestCode() {
      if (requestCode) requestCode.innerHTML = highlightCode(buildSnippet(endpoint, state.codeTab), state.codeTab);
    }

    if (baseInput) {
      baseInput.addEventListener("input", function (event) {
        state.baseUrl = event.target.value.trim() || docs.meta.defaultBaseUrl;
        localStorage.setItem("fbreach_docs_base_url", state.baseUrl);
        updateRequestCode();
      });
    }

    if (tokenInput) {
      tokenInput.addEventListener("input", function (event) {
        state.apiToken = event.target.value;
        updateRequestCode();
      });
    }

    document.querySelectorAll("[data-code-tab]").forEach(function (tab) {
      tab.addEventListener("click", function () {
        state.codeTab = tab.dataset.codeTab;
        document.querySelectorAll("[data-code-tab]").forEach(function (other) {
          other.classList.toggle("active", other === tab);
        });
        updateRequestCode();
      });
    });

    if (copyRequestCode) {
      copyRequestCode.addEventListener("click", function () {
        copyText(buildSnippet(endpoint, state.codeTab));
      });
    }
  }

  function bindCopyButtons() {
    document.querySelectorAll("[data-copy]").forEach(function (button) {
      if (button.dataset.bound === "1") return;
      button.dataset.bound = "1";
      button.addEventListener("click", function () {
        copyText(button.dataset.copy || "");
      });
    });
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard");
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showToast("Copied to clipboard");
    }
  }

  let toastTimer = null;
  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 1700);
  }

  function searchEndpoints(term) {
    const query = term.trim().toLowerCase();
    if (!query) return allEndpoints.slice(0, 18);
    const words = query.split(/\s+/).filter(Boolean);

    return allEndpoints.map(function (endpoint) {
      const haystack = [
        endpoint.name,
        endpoint.method,
        endpoint.path,
        endpoint.group,
        endpoint.description
      ].concat((endpoint.pathParams || []).flatMap(function (p) { return [p.key, p.description]; }))
        .concat((endpoint.query || []).flatMap(function (p) { return [p.key, p.description]; }))
        .join(" ").toLowerCase();

      const score = words.reduce(function (total, word) {
        return total + (haystack.indexOf(word) >= 0 ? 1 : 0);
      }, 0);

      return {
        endpoint: endpoint,
        score: score,
        exact: endpoint.name.toLowerCase().indexOf(query) >= 0 || endpoint.path.toLowerCase().indexOf(query) >= 0
      };
    }).filter(function (item) {
      return item.score === words.length;
    }).sort(function (a, b) {
      return Number(b.exact) - Number(a.exact) || a.endpoint.name.localeCompare(b.endpoint.name);
    }).slice(0, 28).map(function (item) {
      return item.endpoint;
    });
  }

  function renderSearchResults(term) {
    const results = searchEndpoints(term);
    if (!results.length) {
      searchResults.innerHTML = '<div class="search-empty">No matching endpoints. Try a path, parameter name, capability, or action.</div>';
      return;
    }

    state.searchSelection = Math.min(state.searchSelection, results.length - 1);
    searchResults.innerHTML = results.map(function (endpoint, index) {
      const group = docs.groups.find(function (g) { return g.sourceTitle === endpoint.group; });
      return '<button class="search-result ' + (index === state.searchSelection ? "active" : "") +
        '" type="button" data-search-id="' + esc(endpoint.id) + '"><span class="method-badge ' +
        methodClass(endpoint.method) + '">' + esc(endpoint.method) + '</span><span><span class="result-name">' +
        esc(endpoint.name) + '</span><span class="result-path">' + esc(basePath(endpoint)) +
        '</span></span><span class="result-group">' + esc(group ? group.title : "") + '</span></button>';
    }).join("");

    searchResults.querySelectorAll("[data-search-id]").forEach(function (button) {
      button.addEventListener("click", function () {
        location.hash = "endpoint/" + encodeURIComponent(button.dataset.searchId);
        closeSearch();
      });
    });
  }

  function openSearch() {
    searchModal.hidden = false;
    searchInput.value = "";
    state.searchSelection = 0;
    renderSearchResults("");
    setTimeout(function () { searchInput.focus(); }, 20);
  }

  function closeSearch() {
    searchModal.hidden = true;
  }

  function selectSearchResult(delta) {
    const buttons = Array.from(searchResults.querySelectorAll("[data-search-id]"));
    if (!buttons.length) return;
    state.searchSelection = (state.searchSelection + delta + buttons.length) % buttons.length;
    buttons.forEach(function (button, index) {
      button.classList.toggle("active", index === state.searchSelection);
    });
    buttons[state.searchSelection].scrollIntoView({ block: "nearest" });
  }

  function activateSearchResult() {
    const buttons = searchResults.querySelectorAll("[data-search-id]");
    if (buttons[state.searchSelection]) buttons[state.searchSelection].click();
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("fbreach_docs_theme", theme);
  }

  function initTheme() {
    const saved = localStorage.getItem("fbreach_docs_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
  }

  function toggleTheme() {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  }

  function openMobileNav() {
    document.body.classList.add("nav-open");
    mobileNavToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileNav() {
    document.body.classList.remove("nav-open");
    mobileNavToggle.setAttribute("aria-expanded", "false");
  }

  searchTrigger.addEventListener("click", openSearch);
  searchModal.addEventListener("click", function (event) {
    if (event.target === searchModal) closeSearch();
  });
  searchInput.addEventListener("input", function (event) {
    state.searchSelection = 0;
    renderSearchResults(event.target.value);
  });
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectSearchResult(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      selectSearchResult(-1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      activateSearchResult();
    }
  });

  themeToggle.addEventListener("click", toggleTheme);
  mobileNavToggle.addEventListener("click", function () {
    if (document.body.classList.contains("nav-open")) closeMobileNav();
    else openMobileNav();
  });
  sidebarBackdrop.addEventListener("click", closeMobileNav);

  document.addEventListener("keydown", function (event) {
    const commandSearch = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (commandSearch) {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape") {
      if (!searchModal.hidden) closeSearch();
      else closeMobileNav();
    }
  });

  window.addEventListener("hashchange", render);

  initTheme();
  renderSidebar();
  render();
})();