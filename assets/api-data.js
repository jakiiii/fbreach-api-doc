/* Generated from the canonical FacebookReach Postman collection. */
window.FBREACH_DOCS = {
  "meta": {
    "title": "Facebook Reach Collection API",
    "description": "Developer-facing FacebookReach collection modeled after the Data365 Postman workflow: only base_url and api_token are collection variables. All resource identifiers, Facebook targets, filters, limits, and write options are request-scoped path or query parameters with fake example values and descriptions. Optional parameters are kept disabled where appropriate so developers can enable and edit them directly in Postman's Params tab.",
    "postmanId": "3f75e436-7e61-4a99-b03f-20260921fb01",
    "sourceCollectionSha": "4b2b5e855e2696ad5276d2876163d41c3e11529d",
    "generatedFrom": "jakiiii/facebook-reach/documentation/postman/Facebook_Reach_Collection_API.postman_collection.json",
    "defaultBaseUrl": "http://127.0.0.1:8079",
    "authHeader": "Authorization",
    "authScheme": "Token",
    "endpointCount": 148,
    "groupCount": 13
  },
  "groups": [
    {
      "id": "group-0",
      "title": "API & Health",
      "sourceTitle": "00 - API & Health",
      "description": "Service liveness, readiness, discovery indexes, capability metadata, and aggregate operational health.",
      "endpoints": [
        {
          "id": "00-api-health--liveness--get-health-live",
          "group": "00 - API & Health",
          "name": "Liveness",
          "method": "GET",
          "path": "/health/live/",
          "rawUrl": "{{base_url}}/health/live/",
          "description": "Liveness. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/health/live/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "liveness"
        },
        {
          "id": "00-api-health--readiness--get-health-ready",
          "group": "00 - API & Health",
          "name": "Readiness",
          "method": "GET",
          "path": "/health/ready/",
          "rawUrl": "{{base_url}}/health/ready/",
          "description": "Readiness. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/health/ready/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            503
          ],
          "responseProfile": "readiness"
        },
        {
          "id": "00-api-health--collection-api-index--get-api-v1-facebook-collection",
          "group": "00 - API & Health",
          "name": "Collection API Index",
          "method": "GET",
          "path": "/api/v1/facebook/collection/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/",
          "description": "Collection API Index. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/collection/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "api_index"
        },
        {
          "id": "00-api-health--grouped-facebook-api-index--get-api-v1-facebook",
          "group": "00 - API & Health",
          "name": "Grouped Facebook API Index",
          "method": "GET",
          "path": "/api/v1/facebook/",
          "rawUrl": "{{base_url}}/api/v1/facebook/",
          "description": "Grouped Facebook API Index. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "api_index"
        },
        {
          "id": "00-api-health--capabilities--get-api-v1-capabilities",
          "group": "00 - API & Health",
          "name": "Capabilities",
          "method": "GET",
          "path": "/api/v1/capabilities/",
          "rawUrl": "{{base_url}}/api/v1/capabilities/",
          "description": "Capabilities. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/capabilities/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "capability_list"
        },
        {
          "id": "00-api-health--operational-health--get-api-v1-operational-health",
          "group": "00 - API & Health",
          "name": "Operational Health",
          "method": "GET",
          "path": "/api/v1/operational-health/",
          "rawUrl": "{{base_url}}/api/v1/operational-health/",
          "description": "Operational Health. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/operational-health/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            503
          ],
          "responseProfile": "operational_health"
        }
      ]
    },
    {
      "id": "group-1",
      "title": "Profile Collection",
      "sourceTitle": "01 - Profile Collection",
      "description": "Start bounded or recurring Profile/Page/Group collection jobs, poll update state, and read cached profile data.",
      "endpoints": [
        {
          "id": "01-profile-collection--start-deep-profile-update--post-api-v1-facebook-collection-profile-profile-id-update-profile-type-page-load-feed-posts-1-max-pos",
          "group": "01 - Profile Collection",
          "name": "Start Deep Profile Update",
          "method": "POST",
          "path": "/api/v1/facebook/collection/profile/:profile_id/update/?profile_type=page&load_feed_posts=1&max_posts=50&load_comments=1&max_comments=25&load_replies=1&load_reactions=1&load_reactors=1&max_reactors=50&load_shares=1&max_shares=50&load_media=1",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/?profile_type=page&load_feed_posts=1&max_posts=50&load_comments=1&max_comments=25&load_replies=1&load_reactions=1&load_reactors=1&max_reactors=50&load_shares=1&max_shares=50&load_media=1",
          "description": "Start Deep Profile Update. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/?profile_type=page&load_feed_posts=1&max_posts=50&load_comments=1&max_comments=25&load_replies=1&load_reactions=1&load_reactors=1&max_reactors=50&load_shares=1&max_shares=50&load_media=1.",
          "pathParams": [
            {
              "key": "profile_id",
              "value": "bbcnews",
              "description": "Facebook username or numeric Facebook ID used by the collection profile endpoint. Fake example: bbcnews.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "profile_type",
              "value": "page",
              "description": "Facebook source type for the target. Allowed values: profile, page, or group.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_feed_posts",
              "value": "1",
              "description": "1 enables collection of visible feed posts; 0 collects profile information only.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_posts",
              "value": "50",
              "description": "Maximum number of posts to request. FacebookReach currently clamps supported collection limits to 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_comments",
              "value": "1",
              "description": "1 enables comment collection for each selected post.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_comments",
              "value": "25",
              "description": "Maximum comments requested per post. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_replies",
              "value": "1",
              "description": "1 enables reply collection for comments.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_reactions",
              "value": "1",
              "description": "1 enables post reaction-summary collection.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_reactors",
              "value": "1",
              "description": "1 enables collection of visible reactor profiles.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_reactors",
              "value": "50",
              "description": "Maximum visible reactor profiles requested. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_shares",
              "value": "1",
              "description": "1 enables collection of visible shares.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_shares",
              "value": "50",
              "description": "Maximum visible shares requested. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_media",
              "value": "1",
              "description": "1 enables post media collection.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "01-profile-collection--profile-update-status--get-api-v1-facebook-collection-profile-profile-id-update",
          "group": "01 - Profile Collection",
          "name": "Profile Update Status",
          "method": "GET",
          "path": "/api/v1/facebook/collection/profile/:profile_id/update/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/",
          "description": "Profile Update Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/.",
          "pathParams": [
            {
              "key": "profile_id",
              "value": "bbcnews",
              "description": "Facebook username or numeric Facebook ID used by the collection profile endpoint. Fake example: bbcnews.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_status"
        },
        {
          "id": "01-profile-collection--cached-profile--get-api-v1-facebook-collection-profile-profile-id",
          "group": "01 - Profile Collection",
          "name": "Cached Profile",
          "method": "GET",
          "path": "/api/v1/facebook/collection/profile/:profile_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/profile/:profile_id/",
          "description": "Cached Profile. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/profile/:profile_id/.",
          "pathParams": [
            {
              "key": "profile_id",
              "value": "bbcnews",
              "description": "Facebook username or numeric Facebook ID used by the collection profile endpoint. Fake example: bbcnews.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "source_data"
        },
        {
          "id": "01-profile-collection--cached-profile-feed-posts--get-api-v1-facebook-collection-profile-profile-id-feed-posts-max-page-size-50-order-by-date-desc",
          "group": "01 - Profile Collection",
          "name": "Cached Profile Feed Posts",
          "method": "GET",
          "path": "/api/v1/facebook/collection/profile/:profile_id/feed/posts/?max_page_size=50&order_by=date_desc",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/profile/:profile_id/feed/posts/?max_page_size=50&order_by=date_desc",
          "description": "Cached Profile Feed Posts. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/profile/:profile_id/feed/posts/?max_page_size=50&order_by=date_desc.",
          "pathParams": [
            {
              "key": "profile_id",
              "value": "bbcnews",
              "description": "Facebook username or numeric Facebook ID used by the collection profile endpoint. Fake example: bbcnews.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "order_by",
              "value": "date_desc",
              "description": "Sort order for cached records. Common values: date_desc or date_asc.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "01-profile-collection--start-profile-auto-update--post-api-v1-facebook-collection-profile-profile-id-update-auto-update-interval-3600-profile-type-page",
          "group": "01 - Profile Collection",
          "name": "Start Profile Auto-Update",
          "method": "POST",
          "path": "/api/v1/facebook/collection/profile/:profile_id/update/?auto_update_interval=3600&profile_type=page&load_feed_posts=1&max_posts=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/?auto_update_interval=3600&profile_type=page&load_feed_posts=1&max_posts=50",
          "description": "Start Profile Auto-Update. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/?auto_update_interval=3600&profile_type=page&load_feed_posts=1&max_posts=50.",
          "pathParams": [
            {
              "key": "profile_id",
              "value": "bbcnews",
              "description": "Facebook username or numeric Facebook ID used by the collection profile endpoint. Fake example: bbcnews.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "auto_update_interval",
              "value": "3600",
              "description": "Recurring update interval in seconds. Minimum: 60. Enable only when creating an auto-update schedule.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "profile_type",
              "value": "page",
              "description": "Facebook source type for the target. Allowed values: profile, page, or group.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_feed_posts",
              "value": "1",
              "description": "1 enables collection of visible feed posts; 0 collects profile information only.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_posts",
              "value": "50",
              "description": "Maximum number of posts to request. FacebookReach currently clamps supported collection limits to 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "01-profile-collection--invalid-profile-type-validation--post-api-v1-facebook-collection-profile-profile-id-update-profile-type-invalid-profile-type",
          "group": "01 - Profile Collection",
          "name": "Invalid Profile Type Validation",
          "method": "POST",
          "path": "/api/v1/facebook/collection/profile/:profile_id/update/?profile_type=invalid-profile-type",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/?profile_type=invalid-profile-type",
          "description": "Invalid Profile Type Validation. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/?profile_type=invalid-profile-type.",
          "pathParams": [
            {
              "key": "profile_id",
              "value": "bbcnews",
              "description": "Facebook username or numeric Facebook ID used by the collection profile endpoint. Fake example: bbcnews.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "profile_type",
              "value": "invalid-profile-type",
              "description": "Facebook source type for the target. Allowed values: profile, page, or group.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            400
          ],
          "responseProfile": "error"
        },
        {
          "id": "01-profile-collection--invalid-auto-update-expiry-validation--post-api-v1-facebook-collection-profile-profile-id-update-auto-update-interval-3600-auto-update-expir",
          "group": "01 - Profile Collection",
          "name": "Invalid Auto-Update Expiry Validation",
          "method": "POST",
          "path": "/api/v1/facebook/collection/profile/:profile_id/update/?auto_update_interval=3600&auto_update_expire_at=not-a-date&profile_type=page",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/?auto_update_interval=3600&auto_update_expire_at=not-a-date&profile_type=page",
          "description": "Invalid Auto-Update Expiry Validation. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/profile/:profile_id/update/?auto_update_interval=3600&auto_update_expire_at=not-a-date&profile_type=page.",
          "pathParams": [
            {
              "key": "profile_id",
              "value": "bbcnews",
              "description": "Facebook username or numeric Facebook ID used by the collection profile endpoint. Fake example: bbcnews.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "auto_update_interval",
              "value": "3600",
              "description": "Recurring update interval in seconds. Minimum: 60. Enable only when creating an auto-update schedule.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "auto_update_expire_at",
              "value": "not-a-date",
              "description": "Optional ISO 8601 datetime after which the auto-update schedule stops.",
              "type": "datetime",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "profile_type",
              "value": "page",
              "description": "Facebook source type for the target. Allowed values: profile, page, or group.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            400
          ],
          "responseProfile": "error"
        }
      ]
    },
    {
      "id": "group-2",
      "title": "Post Collection",
      "sourceTitle": "02 - Post Collection",
      "description": "Collect a Facebook post deeply, then read cached comments, reactors, shares, media-related records, and status.",
      "endpoints": [
        {
          "id": "02-post-collection--start-deep-post-update--post-api-v1-facebook-collection-post-post-id-update-target-url-https-3a-2f-2fwww-facebook-com-2fexamp",
          "group": "02 - Post Collection",
          "name": "Start Deep Post Update",
          "method": "POST",
          "path": "/api/v1/facebook/collection/post/:post_id/update/?target_url=https%3A%2F%2Fwww.facebook.com%2Fexample%2Fposts%2F987654321&load_timestamp=1&load_reactions=1&load_comments=1&max_comments=50&load_replies=1&load_reactors=1&max_reactors=50&load_shares=1&max_shares=50&load_media=1",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/update/?target_url=https%3A%2F%2Fwww.facebook.com%2Fexample%2Fposts%2F987654321&load_timestamp=1&load_reactions=1&load_comments=1&max_comments=50&load_replies=1&load_reactors=1&max_reactors=50&load_shares=1&max_shares=50&load_media=1",
          "description": "Start Deep Post Update. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/post/:post_id/update/?target_url=https%3A%2F%2Fwww.facebook.com%2Fexample%2Fposts%2F987654321&load_timestamp=1&load_reactions=1&load_comments=1&max_comments=50&load_replies=1&load_reactors=1&max_reactors=50&load_shares=1&max_shares=50&load_media=1.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "target_url",
              "value": "https://www.facebook.com/example/posts/987654321",
              "description": "Facebook target URL. Replace the fake URL with the real profile, post, group, page, or Marketplace URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "load_timestamp",
              "value": "1",
              "description": "1 enables post timestamp collection.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_reactions",
              "value": "1",
              "description": "1 enables post reaction-summary collection.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_comments",
              "value": "1",
              "description": "1 enables comment collection for each selected post.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_comments",
              "value": "50",
              "description": "Maximum comments requested per post. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_replies",
              "value": "1",
              "description": "1 enables reply collection for comments.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_reactors",
              "value": "1",
              "description": "1 enables collection of visible reactor profiles.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_reactors",
              "value": "50",
              "description": "Maximum visible reactor profiles requested. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_shares",
              "value": "1",
              "description": "1 enables collection of visible shares.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_shares",
              "value": "50",
              "description": "Maximum visible shares requested. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "load_media",
              "value": "1",
              "description": "1 enables post media collection.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "02-post-collection--post-update-status--get-api-v1-facebook-collection-post-post-id-update",
          "group": "02 - Post Collection",
          "name": "Post Update Status",
          "method": "GET",
          "path": "/api/v1/facebook/collection/post/:post_id/update/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/update/",
          "description": "Post Update Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/post/:post_id/update/.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_status"
        },
        {
          "id": "02-post-collection--cached-post--get-api-v1-facebook-collection-post-post-id",
          "group": "02 - Post Collection",
          "name": "Cached Post",
          "method": "GET",
          "path": "/api/v1/facebook/collection/post/:post_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/",
          "description": "Cached Post. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/post/:post_id/.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record_data"
        },
        {
          "id": "02-post-collection--post-comments--get-api-v1-facebook-collection-post-post-id-comments-max-page-size-50",
          "group": "02 - Post Collection",
          "name": "Post Comments",
          "method": "GET",
          "path": "/api/v1/facebook/collection/post/:post_id/comments/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/comments/?max_page_size=50",
          "description": "Post Comments. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/post/:post_id/comments/?max_page_size=50.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "02-post-collection--post-reactors--get-api-v1-facebook-collection-post-post-id-reactors-max-page-size-50",
          "group": "02 - Post Collection",
          "name": "Post Reactors",
          "method": "GET",
          "path": "/api/v1/facebook/collection/post/:post_id/reactors/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/reactors/?max_page_size=50",
          "description": "Post Reactors. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/post/:post_id/reactors/?max_page_size=50.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "02-post-collection--post-reactors-by-type--get-api-v1-facebook-collection-post-post-id-reactors-max-page-size-50-reaction-type-love",
          "group": "02 - Post Collection",
          "name": "Post Reactors by Type",
          "method": "GET",
          "path": "/api/v1/facebook/collection/post/:post_id/reactors/?max_page_size=50&reaction_type=love",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/reactors/?max_page_size=50&reaction_type=love",
          "description": "Post Reactors by Type. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/post/:post_id/reactors/?max_page_size=50&reaction_type=love.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "reaction_type",
              "value": "love",
              "description": "Optional reaction filter such as like, love, haha, wow, sad, or angry.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "02-post-collection--post-reactor-profiles-alias--get-api-v1-facebook-collection-post-post-id-reactors-profiles-max-page-size-50",
          "group": "02 - Post Collection",
          "name": "Post Reactor Profiles Alias",
          "method": "GET",
          "path": "/api/v1/facebook/collection/post/:post_id/reactors/profiles/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/reactors/profiles/?max_page_size=50",
          "description": "Post Reactor Profiles Alias. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/post/:post_id/reactors/profiles/?max_page_size=50.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "02-post-collection--post-shares--get-api-v1-facebook-collection-post-post-id-shares-max-page-size-50",
          "group": "02 - Post Collection",
          "name": "Post Shares",
          "method": "GET",
          "path": "/api/v1/facebook/collection/post/:post_id/shares/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/shares/?max_page_size=50",
          "description": "Post Shares. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/post/:post_id/shares/?max_page_size=50.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "02-post-collection--post-share-posts-alias--get-api-v1-facebook-collection-post-post-id-shares-posts-max-page-size-50",
          "group": "02 - Post Collection",
          "name": "Post Share Posts Alias",
          "method": "GET",
          "path": "/api/v1/facebook/collection/post/:post_id/shares/posts/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/post/:post_id/shares/posts/?max_page_size=50",
          "description": "Post Share Posts Alias. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/post/:post_id/shares/posts/?max_page_size=50.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "123456789012345",
              "description": "Facebook post external ID. Fake example; replace it with the target post ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        }
      ]
    },
    {
      "id": "group-3",
      "title": "Comments",
      "sourceTitle": "03 - Comments",
      "description": "Read cached Facebook comments and their normalized reply records.",
      "endpoints": [
        {
          "id": "03-comments--cached-comment--get-api-v1-facebook-collection-comment-comment-id",
          "group": "03 - Comments",
          "name": "Cached Comment",
          "method": "GET",
          "path": "/api/v1/facebook/collection/comment/:comment_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/comment/:comment_id/",
          "description": "Cached Comment. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/comment/:comment_id/.",
          "pathParams": [
            {
              "key": "comment_id",
              "value": "987654321098765",
              "description": "Facebook comment external ID. Fake example; replace it with the target comment ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record_data"
        },
        {
          "id": "03-comments--comment-replies--get-api-v1-facebook-collection-comment-comment-id-replies-max-page-size-50",
          "group": "03 - Comments",
          "name": "Comment Replies",
          "method": "GET",
          "path": "/api/v1/facebook/collection/comment/:comment_id/replies/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/comment/:comment_id/replies/?max_page_size=50",
          "description": "Comment Replies. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/comment/:comment_id/replies/?max_page_size=50.",
          "pathParams": [
            {
              "key": "comment_id",
              "value": "987654321098765",
              "description": "Facebook comment external ID. Fake example; replace it with the target comment ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        }
      ]
    },
    {
      "id": "group-4",
      "title": "Facebook Post Search",
      "sourceTitle": "04 - Facebook Post Search",
      "description": "Run latest, top, and hashtag post searches asynchronously and read cached search results.",
      "endpoints": [
        {
          "id": "04-facebook-post-search--latest-posts-start--post-api-v1-facebook-collection-search-search-request-posts-latest-update-max-posts-50",
          "group": "04 - Facebook Post Search",
          "name": "Latest Posts - Start",
          "method": "POST",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/latest/update/?max_posts=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/latest/update/?max_posts=50",
          "description": "Latest Posts - Start. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/latest/update/?max_posts=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_posts",
              "value": "50",
              "description": "Maximum number of posts to request. FacebookReach currently clamps supported collection limits to 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "04-facebook-post-search--latest-posts-status--get-api-v1-facebook-collection-search-search-request-posts-latest-update",
          "group": "04 - Facebook Post Search",
          "name": "Latest Posts - Status",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/latest/update/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/latest/update/",
          "description": "Latest Posts - Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/latest/update/.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_status"
        },
        {
          "id": "04-facebook-post-search--latest-posts-cached--get-api-v1-facebook-collection-search-search-request-posts-latest-posts-max-page-size-50",
          "group": "04 - Facebook Post Search",
          "name": "Latest Posts - Cached",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/latest/posts/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/latest/posts/?max_page_size=50",
          "description": "Latest Posts - Cached. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/latest/posts/?max_page_size=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "04-facebook-post-search--top-posts-start--post-api-v1-facebook-collection-search-search-request-posts-top-update-max-posts-50",
          "group": "04 - Facebook Post Search",
          "name": "Top Posts - Start",
          "method": "POST",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/top/update/?max_posts=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/top/update/?max_posts=50",
          "description": "Top Posts - Start. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/top/update/?max_posts=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_posts",
              "value": "50",
              "description": "Maximum number of posts to request. FacebookReach currently clamps supported collection limits to 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "04-facebook-post-search--top-posts-status--get-api-v1-facebook-collection-search-search-request-posts-top-update",
          "group": "04 - Facebook Post Search",
          "name": "Top Posts - Status",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/top/update/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/top/update/",
          "description": "Top Posts - Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/top/update/.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_status"
        },
        {
          "id": "04-facebook-post-search--top-posts-cached--get-api-v1-facebook-collection-search-search-request-posts-top-posts-max-page-size-50",
          "group": "04 - Facebook Post Search",
          "name": "Top Posts - Cached",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/top/posts/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/top/posts/?max_page_size=50",
          "description": "Top Posts - Cached. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/top/posts/?max_page_size=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "04-facebook-post-search--hashtag-posts-start--post-api-v1-facebook-collection-search-search-request-posts-hashtag-update-max-posts-50",
          "group": "04 - Facebook Post Search",
          "name": "Hashtag Posts - Start",
          "method": "POST",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/hashtag/update/?max_posts=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/hashtag/update/?max_posts=50",
          "description": "Hashtag Posts - Start. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/hashtag/update/?max_posts=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "news",
              "description": "Hashtag text without the # symbol. Fake example: news.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_posts",
              "value": "50",
              "description": "Maximum number of posts to request. FacebookReach currently clamps supported collection limits to 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "04-facebook-post-search--hashtag-posts-status--get-api-v1-facebook-collection-search-search-request-posts-hashtag-update",
          "group": "04 - Facebook Post Search",
          "name": "Hashtag Posts - Status",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/hashtag/update/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/hashtag/update/",
          "description": "Hashtag Posts - Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/hashtag/update/.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "news",
              "description": "Hashtag text without the # symbol. Fake example: news.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_status"
        },
        {
          "id": "04-facebook-post-search--hashtag-posts-cached--get-api-v1-facebook-collection-search-search-request-posts-hashtag-posts-max-page-size-50",
          "group": "04 - Facebook Post Search",
          "name": "Hashtag Posts - Cached",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/posts/hashtag/posts/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/posts/hashtag/posts/?max_page_size=50",
          "description": "Hashtag Posts - Cached. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/posts/hashtag/posts/?max_page_size=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "news",
              "description": "Hashtag text without the # symbol. Fake example: news.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        }
      ]
    },
    {
      "id": "group-5",
      "title": "Facebook Profile Search",
      "sourceTitle": "05 - Facebook Profile Search",
      "description": "Search Facebook people, Pages, and Groups, poll the collection task, and read cached profile results.",
      "endpoints": [
        {
          "id": "05-facebook-profile-search--people-search-start--post-api-v1-facebook-collection-search-search-request-profiles-people-update-max-profiles-50",
          "group": "05 - Facebook Profile Search",
          "name": "People Search - Start",
          "method": "POST",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/people/update/?max_profiles=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/people/update/?max_profiles=50",
          "description": "People Search - Start. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/people/update/?max_profiles=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_profiles",
              "value": "50",
              "description": "Maximum profiles returned/collected for a Facebook profile search. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "05-facebook-profile-search--people-search-status--get-api-v1-facebook-collection-search-search-request-profiles-people-update",
          "group": "05 - Facebook Profile Search",
          "name": "People Search - Status",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/people/update/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/people/update/",
          "description": "People Search - Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/people/update/.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_status"
        },
        {
          "id": "05-facebook-profile-search--people-search-cached--get-api-v1-facebook-collection-search-search-request-profiles-people-profiles-max-page-size-50",
          "group": "05 - Facebook Profile Search",
          "name": "People Search - Cached",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/people/profiles/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/people/profiles/?max_page_size=50",
          "description": "People Search - Cached. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/people/profiles/?max_page_size=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "source_data_list"
        },
        {
          "id": "05-facebook-profile-search--pages-search-start--post-api-v1-facebook-collection-search-search-request-profiles-pages-update-max-profiles-50",
          "group": "05 - Facebook Profile Search",
          "name": "Pages Search - Start",
          "method": "POST",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/pages/update/?max_profiles=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/pages/update/?max_profiles=50",
          "description": "Pages Search - Start. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/pages/update/?max_profiles=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_profiles",
              "value": "50",
              "description": "Maximum profiles returned/collected for a Facebook profile search. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "05-facebook-profile-search--pages-search-status--get-api-v1-facebook-collection-search-search-request-profiles-pages-update",
          "group": "05 - Facebook Profile Search",
          "name": "Pages Search - Status",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/pages/update/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/pages/update/",
          "description": "Pages Search - Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/pages/update/.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_status"
        },
        {
          "id": "05-facebook-profile-search--pages-search-cached--get-api-v1-facebook-collection-search-search-request-profiles-pages-profiles-max-page-size-50",
          "group": "05 - Facebook Profile Search",
          "name": "Pages Search - Cached",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/pages/profiles/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/pages/profiles/?max_page_size=50",
          "description": "Pages Search - Cached. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/pages/profiles/?max_page_size=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "source_data_list"
        },
        {
          "id": "05-facebook-profile-search--groups-search-start--post-api-v1-facebook-collection-search-search-request-profiles-groups-update-max-profiles-50",
          "group": "05 - Facebook Profile Search",
          "name": "Groups Search - Start",
          "method": "POST",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/groups/update/?max_profiles=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/groups/update/?max_profiles=50",
          "description": "Groups Search - Start. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/groups/update/?max_profiles=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_profiles",
              "value": "50",
              "description": "Maximum profiles returned/collected for a Facebook profile search. Supported range is 1..200.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202
          ],
          "responseProfile": "collection_start"
        },
        {
          "id": "05-facebook-profile-search--groups-search-status--get-api-v1-facebook-collection-search-search-request-profiles-groups-update",
          "group": "05 - Facebook Profile Search",
          "name": "Groups Search - Status",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/groups/update/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/groups/update/",
          "description": "Groups Search - Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/groups/update/.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_status"
        },
        {
          "id": "05-facebook-profile-search--groups-search-cached--get-api-v1-facebook-collection-search-search-request-profiles-groups-profiles-max-page-size-50",
          "group": "05 - Facebook Profile Search",
          "name": "Groups Search - Cached",
          "method": "GET",
          "path": "/api/v1/facebook/collection/search/:search_request/profiles/groups/profiles/?max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/groups/profiles/?max_page_size=50",
          "description": "Groups Search - Cached. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/search/:search_request/profiles/groups/profiles/?max_page_size=50.",
          "pathParams": [
            {
              "key": "search_request",
              "value": "BBC News",
              "description": "Facebook search keyword or phrase. Fake example: BBC News.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "source_data_list"
        }
      ]
    },
    {
      "id": "group-6",
      "title": "Collection Tasks",
      "sourceTitle": "06 - Collection Tasks",
      "description": "Inspect, filter, cancel, or disable collection update and auto-update tasks.",
      "endpoints": [
        {
          "id": "06-collection-tasks--list-update-tasks--get-api-v1-facebook-collection-tasks-task-type-update-max-page-size-50",
          "group": "06 - Collection Tasks",
          "name": "List Update Tasks",
          "method": "GET",
          "path": "/api/v1/facebook/collection/tasks/?task_type=update&max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/tasks/?task_type=update&max_page_size=50",
          "description": "List Update Tasks. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/tasks/?task_type=update&max_page_size=50.",
          "pathParams": [],
          "query": [
            {
              "key": "task_type",
              "value": "update",
              "description": "Collection task type. Allowed values: update or auto_update.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "collection_task"
        },
        {
          "id": "06-collection-tasks--list-auto-update-tasks--get-api-v1-facebook-collection-tasks-task-type-auto-update-max-page-size-50",
          "group": "06 - Collection Tasks",
          "name": "List Auto-Update Tasks",
          "method": "GET",
          "path": "/api/v1/facebook/collection/tasks/?task_type=auto_update&max_page_size=50",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/tasks/?task_type=auto_update&max_page_size=50",
          "description": "List Auto-Update Tasks. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/tasks/?task_type=auto_update&max_page_size=50.",
          "pathParams": [],
          "query": [
            {
              "key": "task_type",
              "value": "auto_update",
              "description": "Collection task type. Allowed values: update or auto_update.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "max_page_size",
              "value": "50",
              "description": "Maximum cached records returned on one page. Collection API supports up to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "collection_task"
        },
        {
          "id": "06-collection-tasks--update-task-detail--get-api-v1-facebook-collection-tasks-task-id",
          "group": "06 - Collection Tasks",
          "name": "Update Task Detail",
          "method": "GET",
          "path": "/api/v1/facebook/collection/tasks/:task_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/tasks/:task_id/",
          "description": "Update Task Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/tasks/:task_id/.",
          "pathParams": [
            {
              "key": "task_id",
              "value": "cccccccc-cccc-4ccc-8ccc-cccccccccccc",
              "description": "Collection update CrawlJob UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_task"
        },
        {
          "id": "06-collection-tasks--cancel-pending-update-task--delete-api-v1-facebook-collection-tasks-task-id",
          "group": "06 - Collection Tasks",
          "name": "Cancel Pending Update Task",
          "method": "DELETE",
          "path": "/api/v1/facebook/collection/tasks/:task_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/tasks/:task_id/",
          "description": "Cancel Pending Update Task. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: DELETE {{base_url}}/api/v1/facebook/collection/tasks/:task_id/.",
          "pathParams": [
            {
              "key": "task_id",
              "value": "cccccccc-cccc-4ccc-8ccc-cccccccccccc",
              "description": "Collection update CrawlJob UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            204,
            404,
            409
          ],
          "responseProfile": "empty"
        },
        {
          "id": "06-collection-tasks--auto-update-task-detail--get-api-v1-facebook-collection-tasks-auto-update-task-id",
          "group": "06 - Collection Tasks",
          "name": "Auto-Update Task Detail",
          "method": "GET",
          "path": "/api/v1/facebook/collection/tasks/:auto_update_task_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/tasks/:auto_update_task_id/",
          "description": "Auto-Update Task Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/tasks/:auto_update_task_id/.",
          "pathParams": [
            {
              "key": "auto_update_task_id",
              "value": "101",
              "description": "Collection auto-update CrawlSchedule integer ID. Fake example.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "collection_task"
        },
        {
          "id": "06-collection-tasks--disable-auto-update-task--delete-api-v1-facebook-collection-tasks-auto-update-task-id",
          "group": "06 - Collection Tasks",
          "name": "Disable Auto-Update Task",
          "method": "DELETE",
          "path": "/api/v1/facebook/collection/tasks/:auto_update_task_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/tasks/:auto_update_task_id/",
          "description": "Disable Auto-Update Task. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: DELETE {{base_url}}/api/v1/facebook/collection/tasks/:auto_update_task_id/.",
          "pathParams": [
            {
              "key": "auto_update_task_id",
              "value": "101",
              "description": "Collection auto-update CrawlSchedule integer ID. Fake example.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            204,
            404
          ],
          "responseProfile": "empty"
        },
        {
          "id": "06-collection-tasks--invalid-task-type-validation--get-api-v1-facebook-collection-tasks-task-type-invalid",
          "group": "06 - Collection Tasks",
          "name": "Invalid Task Type Validation",
          "method": "GET",
          "path": "/api/v1/facebook/collection/tasks/?task_type=invalid",
          "rawUrl": "{{base_url}}/api/v1/facebook/collection/tasks/?task_type=invalid",
          "description": "Invalid Task Type Validation. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/collection/tasks/?task_type=invalid.",
          "pathParams": [],
          "query": [
            {
              "key": "task_type",
              "value": "invalid",
              "description": "Collection task type. Allowed values: update or auto_update.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            400
          ],
          "responseProfile": "error"
        }
      ]
    },
    {
      "id": "group-7",
      "title": "Grouped Facebook APIs",
      "sourceTitle": "07 - Grouped Facebook APIs",
      "description": "Data365-style grouped Facebook APIs for Profile, User, Page, Group, Post, Marketplace, Public, and All data scopes.",
      "endpoints": [
        {
          "id": "07-grouped-facebook-apis--profile-records--get-api-v1-facebook-profile",
          "group": "07 - Grouped Facebook APIs",
          "name": "Profile Records",
          "method": "GET",
          "path": "/api/v1/facebook/profile/",
          "rawUrl": "{{base_url}}/api/v1/facebook/profile/",
          "description": "Profile Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/profile/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "07-grouped-facebook-apis--profile-crawl--post-api-v1-facebook-profile-capability-profile-info-target-url-https-3a-2f-2fwww-facebook-com-2fbbcn",
          "group": "07 - Grouped Facebook APIs",
          "name": "Profile Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/profile/?capability=profile.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1",
          "rawUrl": "{{base_url}}/api/v1/facebook/profile/?capability=profile.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1",
          "description": "Profile Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/profile/?capability=profile.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "profile.info",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/bbcnews",
              "description": "Facebook target URL. Replace the fake URL with the real profile, post, group, page, or Marketplace URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "1",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--user-records--get-api-v1-facebook-user",
          "group": "07 - Grouped Facebook APIs",
          "name": "User Records",
          "method": "GET",
          "path": "/api/v1/facebook/user/",
          "rawUrl": "{{base_url}}/api/v1/facebook/user/",
          "description": "User Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/user/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "07-grouped-facebook-apis--user-crawl--post-api-v1-facebook-user-capability-home-feed-limit-10",
          "group": "07 - Grouped Facebook APIs",
          "name": "User Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/user/?capability=home.feed&limit=10",
          "rawUrl": "{{base_url}}/api/v1/facebook/user/?capability=home.feed&limit=10",
          "description": "User Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/user/?capability=home.feed&limit=10.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "home.feed",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            },
            {
              "key": "limit",
              "value": "10",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--page-records--get-api-v1-facebook-page",
          "group": "07 - Grouped Facebook APIs",
          "name": "Page Records",
          "method": "GET",
          "path": "/api/v1/facebook/page/",
          "rawUrl": "{{base_url}}/api/v1/facebook/page/",
          "description": "Page Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/page/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "07-grouped-facebook-apis--page-crawl--post-api-v1-facebook-page-capability-page-posts-target-url-https-3a-2f-2fwww-facebook-com-2fbbcnews-l",
          "group": "07 - Grouped Facebook APIs",
          "name": "Page Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/page/?capability=page.posts&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=10",
          "rawUrl": "{{base_url}}/api/v1/facebook/page/?capability=page.posts&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=10",
          "description": "Page Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/page/?capability=page.posts&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=10.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "page.posts",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/bbcnews",
              "description": "Facebook target URL. Replace the fake URL with the real profile, post, group, page, or Marketplace URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "10",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--group-records--get-api-v1-facebook-group",
          "group": "07 - Grouped Facebook APIs",
          "name": "Group Records",
          "method": "GET",
          "path": "/api/v1/facebook/group/",
          "rawUrl": "{{base_url}}/api/v1/facebook/group/",
          "description": "Group Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/group/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "07-grouped-facebook-apis--group-crawl--post-api-v1-facebook-group-capability-group-info-target-url-https-3a-2f-2fwww-facebook-com-2fgroups-2",
          "group": "07 - Grouped Facebook APIs",
          "name": "Group Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/group/?capability=group.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F123456789&limit=1",
          "rawUrl": "{{base_url}}/api/v1/facebook/group/?capability=group.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F123456789&limit=1",
          "description": "Group Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/group/?capability=group.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F123456789&limit=1.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "group.info",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/groups/123456789",
              "description": "Facebook target URL. Replace the fake URL with the real profile, post, group, page, or Marketplace URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "1",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--group-posts-crawl--post-api-v1-facebook-group-capability-group-posts-target-url-https-3a-2f-2fwww-facebook-com-2fgroups-",
          "group": "07 - Grouped Facebook APIs",
          "name": "Group Posts Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/group/?capability=group.posts&target_url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F123456789&facebook_session=11111111-1111-4111-8111-111111111111&limit=20",
          "rawUrl": "{{base_url}}/api/v1/facebook/group/?capability=group.posts&target_url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F123456789&facebook_session=11111111-1111-4111-8111-111111111111&limit=20",
          "description": "Group Posts Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/group/?capability=group.posts&target_url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F123456789&limit=20.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "group.posts",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/groups/123456789",
              "description": "Facebook target URL. Replace the fake URL with the real profile, post, group, page, or Marketplace URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            },
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--post-records--get-api-v1-facebook-post",
          "group": "07 - Grouped Facebook APIs",
          "name": "Post Records",
          "method": "GET",
          "path": "/api/v1/facebook/post/",
          "rawUrl": "{{base_url}}/api/v1/facebook/post/",
          "description": "Post Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/post/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "07-grouped-facebook-apis--post-crawl--post-api-v1-facebook-post-capability-post-comments-target-url-https-3a-2f-2fwww-facebook-com-2fexampl",
          "group": "07 - Grouped Facebook APIs",
          "name": "Post Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/post/?capability=post.comments&target_url=https%3A%2F%2Fwww.facebook.com%2Fexample%2Fposts%2F987654321&limit=25",
          "rawUrl": "{{base_url}}/api/v1/facebook/post/?capability=post.comments&target_url=https%3A%2F%2Fwww.facebook.com%2Fexample%2Fposts%2F987654321&limit=25",
          "description": "Post Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/post/?capability=post.comments&target_url=https%3A%2F%2Fwww.facebook.com%2Fexample%2Fposts%2F987654321&limit=25.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "post.comments",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/example/posts/987654321",
              "description": "Facebook target URL. Replace the fake URL with the real profile, post, group, page, or Marketplace URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "25",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--marketplace-records--get-api-v1-facebook-marketplace",
          "group": "07 - Grouped Facebook APIs",
          "name": "Marketplace Records",
          "method": "GET",
          "path": "/api/v1/facebook/marketplace/",
          "rawUrl": "{{base_url}}/api/v1/facebook/marketplace/",
          "description": "Marketplace Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/marketplace/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "07-grouped-facebook-apis--marketplace-crawl--post-api-v1-facebook-marketplace-capability-marketplace-search-query-laptop-limit-20",
          "group": "07 - Grouped Facebook APIs",
          "name": "Marketplace Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/marketplace/?capability=marketplace.search&query=laptop&limit=20",
          "rawUrl": "{{base_url}}/api/v1/facebook/marketplace/?capability=marketplace.search&query=laptop&limit=20",
          "description": "Marketplace Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/marketplace/?capability=marketplace.search&query=laptop&limit=20.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "marketplace.search",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "query",
              "value": "laptop",
              "description": "Search/filter text. Meaning depends on the endpoint.",
              "type": "string",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID or session name. Leave disabled to let FacebookReach select a usable session automatically.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": true
            },
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--public-records--get-api-v1-facebook-public",
          "group": "07 - Grouped Facebook APIs",
          "name": "Public Records",
          "method": "GET",
          "path": "/api/v1/facebook/public/",
          "rawUrl": "{{base_url}}/api/v1/facebook/public/",
          "description": "Public Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/public/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "07-grouped-facebook-apis--public-crawl--post-api-v1-facebook-public-capability-public-data-target-url-https-3a-2f-2fwww-facebook-com-2fbbcnew",
          "group": "07 - Grouped Facebook APIs",
          "name": "Public Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/public/?capability=public.data&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1",
          "rawUrl": "{{base_url}}/api/v1/facebook/public/?capability=public.data&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1",
          "description": "Public Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/public/?capability=public.data&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "public.data",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/bbcnews",
              "description": "Facebook target URL. Replace the fake URL with the real profile, post, group, page, or Marketplace URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "1",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--all-records--get-api-v1-facebook-all",
          "group": "07 - Grouped Facebook APIs",
          "name": "All Records",
          "method": "GET",
          "path": "/api/v1/facebook/all/",
          "rawUrl": "{{base_url}}/api/v1/facebook/all/",
          "description": "All Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/facebook/all/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "07-grouped-facebook-apis--all-crawl--post-api-v1-facebook-all-capability-page-info-target-url-https-3a-2f-2fwww-facebook-com-2fbbcnews-lim",
          "group": "07 - Grouped Facebook APIs",
          "name": "All Crawl",
          "method": "POST",
          "path": "/api/v1/facebook/all/?capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1",
          "rawUrl": "{{base_url}}/api/v1/facebook/all/?capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1",
          "description": "All Crawl. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: POST {{base_url}}/api/v1/facebook/all/?capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&limit=1.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "page.info",
              "description": "FacebookReach capability value, for example page.posts or group.posts.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/bbcnews",
              "description": "Facebook target URL. Replace the fake URL with the real profile, post, group, page, or Marketplace URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "1",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "07-grouped-facebook-apis--profile-record-detail--get-api-v1-facebook-profile-record-id",
          "group": "07 - Grouped Facebook APIs",
          "name": "Profile Record Detail",
          "method": "GET",
          "path": "/api/v1/facebook/profile/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/profile/:record_id/",
          "description": "Profile Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/profile/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "07-grouped-facebook-apis--user-record-detail--get-api-v1-facebook-user-record-id",
          "group": "07 - Grouped Facebook APIs",
          "name": "User Record Detail",
          "method": "GET",
          "path": "/api/v1/facebook/user/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/user/:record_id/",
          "description": "User Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/user/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "07-grouped-facebook-apis--page-record-detail--get-api-v1-facebook-page-record-id",
          "group": "07 - Grouped Facebook APIs",
          "name": "Page Record Detail",
          "method": "GET",
          "path": "/api/v1/facebook/page/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/page/:record_id/",
          "description": "Page Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/page/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "07-grouped-facebook-apis--group-record-detail--get-api-v1-facebook-group-record-id",
          "group": "07 - Grouped Facebook APIs",
          "name": "Group Record Detail",
          "method": "GET",
          "path": "/api/v1/facebook/group/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/group/:record_id/",
          "description": "Group Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/group/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "07-grouped-facebook-apis--post-record-detail--get-api-v1-facebook-post-record-id",
          "group": "07 - Grouped Facebook APIs",
          "name": "Post Record Detail",
          "method": "GET",
          "path": "/api/v1/facebook/post/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/post/:record_id/",
          "description": "Post Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/post/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "07-grouped-facebook-apis--marketplace-record-detail--get-api-v1-facebook-marketplace-record-id",
          "group": "07 - Grouped Facebook APIs",
          "name": "Marketplace Record Detail",
          "method": "GET",
          "path": "/api/v1/facebook/marketplace/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/marketplace/:record_id/",
          "description": "Marketplace Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/marketplace/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "07-grouped-facebook-apis--public-record-detail--get-api-v1-facebook-public-record-id",
          "group": "07 - Grouped Facebook APIs",
          "name": "Public Record Detail",
          "method": "GET",
          "path": "/api/v1/facebook/public/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/public/:record_id/",
          "description": "Public Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/public/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "07-grouped-facebook-apis--all-record-detail--get-api-v1-facebook-all-record-id",
          "group": "07 - Grouped Facebook APIs",
          "name": "All Record Detail",
          "method": "GET",
          "path": "/api/v1/facebook/all/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/facebook/all/:record_id/",
          "description": "All Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/facebook/all/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        }
      ]
    },
    {
      "id": "group-8",
      "title": "Sources & Monitoring",
      "sourceTitle": "08 - Sources & Monitoring",
      "description": "Register Facebook sources, configure monitoring and media policy, and control recurring source acquisition.",
      "endpoints": [
        {
          "id": "08-sources-monitoring--list-sources--get-api-v1-sources",
          "group": "08 - Sources & Monitoring",
          "name": "List Sources",
          "method": "GET",
          "path": "/api/v1/sources/",
          "rawUrl": "{{base_url}}/api/v1/sources/",
          "description": "List Sources. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/sources/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "source_list"
        },
        {
          "id": "08-sources-monitoring--create-source-monitoring-off--post-api-v1-sources-source-type-page-canonical-url-https-3a-2f-2fwww-facebook-com-2fpostman-example-p",
          "group": "08 - Sources & Monitoring",
          "name": "Create Source (Monitoring Off)",
          "method": "POST",
          "path": "/api/v1/sources/?source_type=page&canonical_url=https%3A%2F%2Fwww.facebook.com%2Fpostman.example.page&crawl_enabled=true&download_media=false&monitoring_enabled=false",
          "rawUrl": "{{base_url}}/api/v1/sources/?source_type=page&canonical_url=https%3A%2F%2Fwww.facebook.com%2Fpostman.example.page&crawl_enabled=true&download_media=false&monitoring_enabled=false",
          "description": "Create Source (Monitoring Off). Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/sources/?source_type=page&canonical_url=https%3A%2F%2Fwww.facebook.com%2Fpostman.example.page&crawl_enabled=true&download_media=false&monitoring_enabled=false.",
          "pathParams": [],
          "query": [
            {
              "key": "source_type",
              "value": "page",
              "description": "Facebook source type. Allowed values: profile, page, or group.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "canonical_url",
              "value": "https://www.facebook.com/postman.example.page",
              "description": "Canonical Facebook URL for the source.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "crawl_enabled",
              "value": "true",
              "description": "true enables crawling for this source; false disables it.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "download_media",
              "value": "false",
              "description": "true downloads discovered media when supported.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "monitoring_enabled",
              "value": "false",
              "description": "true enables recurring source monitoring.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400,
            409
          ],
          "responseProfile": "source_mutation"
        },
        {
          "id": "08-sources-monitoring--create-source-monitoring-on-preferred-session--post-api-v1-sources-source-type-profile-canonical-url-https-3a-2f-2fwww-facebook-com-2fpostman-exampl",
          "group": "08 - Sources & Monitoring",
          "name": "Create Source (Monitoring On + Preferred Session)",
          "method": "POST",
          "path": "/api/v1/sources/?source_type=profile&canonical_url=https%3A%2F%2Fwww.facebook.com%2Fpostman.example.profile&crawl_enabled=true&download_media=true&monitoring_enabled=true&monitoring_interval_minutes=1&monitoring_session=11111111-1111-4111-8111-111111111111",
          "rawUrl": "{{base_url}}/api/v1/sources/?source_type=profile&canonical_url=https%3A%2F%2Fwww.facebook.com%2Fpostman.example.profile&crawl_enabled=true&download_media=true&monitoring_enabled=true&monitoring_interval_minutes=1&monitoring_session=11111111-1111-4111-8111-111111111111",
          "description": "Create a monitored source with a preferred authenticated Facebook session. If monitoring_session is omitted or null, FacebookReach automatically selects a healthy authorized session from the pool. Only base_url and api_token are collection variables; replace this request-local fake UUID in the Params tab.",
          "pathParams": [],
          "query": [
            {
              "key": "source_type",
              "value": "profile",
              "description": "Facebook source type. Allowed values: profile, page, or group.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "canonical_url",
              "value": "https://www.facebook.com/postman.example.profile",
              "description": "Canonical Facebook URL for the source.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "crawl_enabled",
              "value": "true",
              "description": "true enables crawling for this source; false disables it.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "download_media",
              "value": "true",
              "description": "true downloads discovered media when supported.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "monitoring_enabled",
              "value": "true",
              "description": "true enables recurring source monitoring.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "monitoring_interval_minutes",
              "value": "1",
              "description": "Monitoring interval in minutes.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "monitoring_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Preferred active FacebookSession UUID. Replace with a real session UUID. Omit this parameter or set null to use automatic healthy session-pool routing.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400,
            409
          ],
          "responseProfile": "source_mutation"
        },
        {
          "id": "08-sources-monitoring--source-detail--get-api-v1-sources-source-id",
          "group": "08 - Sources & Monitoring",
          "name": "Source Detail",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/",
          "description": "Source Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "source"
        },
        {
          "id": "08-sources-monitoring--patch-source--patch-api-v1-sources-source-id-download-media-true-monitoring-session-11111111-1111-4111-8111-11111111",
          "group": "08 - Sources & Monitoring",
          "name": "Patch Source",
          "method": "PATCH",
          "path": "/api/v1/sources/:source_id/?download_media=true&monitoring_session=11111111-1111-4111-8111-111111111111",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/?download_media=true&monitoring_session=11111111-1111-4111-8111-111111111111",
          "description": "Patch Source. This example enables media downloads and sets a preferred monitoring session. Set monitoring_session=null to clear the preference and use automatic pool routing.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "download_media",
              "value": "true",
              "description": "true downloads discovered media when supported.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "monitoring_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Preferred active FacebookSession UUID. Set null to clear the preference and return to automatic healthy session-pool routing.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "source"
        },
        {
          "id": "08-sources-monitoring--source-monitor-status--get-api-v1-sources-source-id-monitor",
          "group": "08 - Sources & Monitoring",
          "name": "Source Monitor Status",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/monitor/",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/monitor/",
          "description": "Source Monitor Status. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/monitor/.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "source_monitor"
        },
        {
          "id": "08-sources-monitoring--pause-source-monitor--post-api-v1-sources-source-id-monitor-pause",
          "group": "08 - Sources & Monitoring",
          "name": "Pause Source Monitor",
          "method": "POST",
          "path": "/api/v1/sources/:source_id/monitor/pause/",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/monitor/pause/",
          "description": "Pause Source Monitor. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/sources/:source_id/monitor/pause/.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            200,
            403,
            404
          ],
          "responseProfile": "source_monitor_action"
        },
        {
          "id": "08-sources-monitoring--resume-source-monitor--post-api-v1-sources-source-id-monitor-resume",
          "group": "08 - Sources & Monitoring",
          "name": "Resume Source Monitor",
          "method": "POST",
          "path": "/api/v1/sources/:source_id/monitor/resume/",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/monitor/resume/",
          "description": "Resume Source Monitor. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/sources/:source_id/monitor/resume/.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202,
            403,
            404,
            409
          ],
          "responseProfile": "source_monitor_action"
        },
        {
          "id": "08-sources-monitoring--rebootstrap-source--post-api-v1-sources-source-id-monitor-rebootstrap",
          "group": "08 - Sources & Monitoring",
          "name": "Rebootstrap Source",
          "method": "POST",
          "path": "/api/v1/sources/:source_id/monitor/rebootstrap/",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/monitor/rebootstrap/",
          "description": "Rebootstrap Source. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/sources/:source_id/monitor/rebootstrap/.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202,
            403,
            404,
            409
          ],
          "responseProfile": "source_monitor_action"
        },
        {
          "id": "08-sources-monitoring--replace-source-put--put-api-v1-sources-source-id-external-id-123456789-username-postman-example-page-canonical-url-https",
          "group": "08 - Sources & Monitoring",
          "name": "Replace Source (PUT)",
          "method": "PUT",
          "path": "/api/v1/sources/:source_id/?external_id=123456789&username=postman.example.page&canonical_url=https%3A%2F%2Fwww.facebook.com%2Fpostman.example.page&crawl_enabled=true&download_media=true&monitoring_enabled=true&monitoring_interval_minutes=1&monitoring_session=11111111-1111-4111-8111-111111111111",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/?external_id=123456789&username=postman.example.page&canonical_url=https%3A%2F%2Fwww.facebook.com%2Fpostman.example.page&crawl_enabled=true&download_media=true&monitoring_enabled=true&monitoring_interval_minutes=1&monitoring_session=11111111-1111-4111-8111-111111111111",
          "description": "Replace Source (PUT) with monitoring enabled and a preferred active FacebookSession UUID. Use monitoring_session=null for automatic healthy session-pool routing.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "external_id",
              "value": "123456789",
              "description": "Optional Facebook external ID.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "username",
              "value": "postman.example.page",
              "description": "Optional Facebook username or slug.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "canonical_url",
              "value": "https://www.facebook.com/postman.example.page",
              "description": "Canonical Facebook URL for the source.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "crawl_enabled",
              "value": "true",
              "description": "true enables crawling for this source; false disables it.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "download_media",
              "value": "true",
              "description": "true downloads discovered media when supported.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "monitoring_enabled",
              "value": "true",
              "description": "true enables recurring source monitoring.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "monitoring_interval_minutes",
              "value": "1",
              "description": "Monitoring interval in minutes.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "monitoring_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Preferred active FacebookSession UUID. Set null to clear the preference and use automatic healthy session-pool routing.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            200,
            400,
            404
          ],
          "responseProfile": "source"
        },
        {
          "id": "08-sources-monitoring--delete-source--delete-api-v1-sources-source-id",
          "group": "08 - Sources & Monitoring",
          "name": "Delete Source",
          "method": "DELETE",
          "path": "/api/v1/sources/:source_id/",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/",
          "description": "Delete Source. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: DELETE {{base_url}}/api/v1/sources/:source_id/.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            204,
            404
          ],
          "responseProfile": "empty"
        }
      ]
    },
    {
      "id": "group-9",
      "title": "Sessions & Capture",
      "sourceTitle": "09 - Sessions & Capture",
      "description": "Inspect authorized Facebook sessions and operate interactive session capture, replacement, verification, and cancellation.",
      "endpoints": [
        {
          "id": "09-sessions-capture--list-sessions--get-api-v1-sessions-status-active",
          "group": "09 - Sessions & Capture",
          "name": "List Sessions",
          "method": "GET",
          "path": "/api/v1/sessions/?status=active",
          "rawUrl": "{{base_url}}/api/v1/sessions/?status=active",
          "description": "List Sessions. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sessions/?status=active.",
          "pathParams": [],
          "query": [
            {
              "key": "status",
              "value": "active",
              "description": "Optional status filter.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "session_list"
        },
        {
          "id": "09-sessions-capture--session-detail--get-api-v1-sessions-session-id",
          "group": "09 - Sessions & Capture",
          "name": "Session Detail",
          "method": "GET",
          "path": "/api/v1/sessions/:session_id/",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/",
          "description": "Session Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sessions/:session_id/.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "session"
        },
        {
          "id": "09-sessions-capture--capture-availability--get-api-v1-sessions-capture-availability",
          "group": "09 - Sessions & Capture",
          "name": "Capture Availability",
          "method": "GET",
          "path": "/api/v1/sessions/capture-availability/",
          "rawUrl": "{{base_url}}/api/v1/sessions/capture-availability/",
          "description": "Capture Availability. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/sessions/capture-availability/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "capture_availability"
        },
        {
          "id": "09-sessions-capture--start-interactive-capture--post-api-v1-sessions-capture-name-postman-account-locale-en-us",
          "group": "09 - Sessions & Capture",
          "name": "Start Interactive Capture",
          "method": "POST",
          "path": "/api/v1/sessions/capture/?name=postman-account&locale=en-US",
          "rawUrl": "{{base_url}}/api/v1/sessions/capture/?name=postman-account&locale=en-US",
          "description": "Start Interactive Capture. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/sessions/capture/?name=postman-account&locale=en-US.",
          "pathParams": [],
          "query": [
            {
              "key": "name",
              "value": "postman-account",
              "description": "Human-readable name for the resource or session capture.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "locale",
              "value": "en-US",
              "description": "Browser locale used during interactive Facebook session capture.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202,
            403,
            409,
            503
          ],
          "responseProfile": "session_list"
        },
        {
          "id": "09-sessions-capture--replace-session--post-api-v1-sessions-session-id-replace-locale-en-us",
          "group": "09 - Sessions & Capture",
          "name": "Replace Session",
          "method": "POST",
          "path": "/api/v1/sessions/:session_id/replace/?locale=en-US",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/replace/?locale=en-US",
          "description": "Replace Session. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/sessions/:session_id/replace/?locale=en-US.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "locale",
              "value": "en-US",
              "description": "Browser locale used during interactive Facebook session capture.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202,
            403,
            404,
            409,
            503
          ],
          "responseProfile": "session"
        },
        {
          "id": "09-sessions-capture--verify-session--post-api-v1-sessions-session-id-verify",
          "group": "09 - Sessions & Capture",
          "name": "Verify Session",
          "method": "POST",
          "path": "/api/v1/sessions/:session_id/verify/",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/verify/",
          "description": "Verify Session. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/sessions/:session_id/verify/.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202,
            403,
            404
          ],
          "responseProfile": "verify_session"
        },
        {
          "id": "09-sessions-capture--list-capture-jobs--get-api-v1-session-captures",
          "group": "09 - Sessions & Capture",
          "name": "List Capture Jobs",
          "method": "GET",
          "path": "/api/v1/session-captures/",
          "rawUrl": "{{base_url}}/api/v1/session-captures/",
          "description": "List Capture Jobs. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/session-captures/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "capture_job_list"
        },
        {
          "id": "09-sessions-capture--capture-job-detail--get-api-v1-session-captures-capture-job-id",
          "group": "09 - Sessions & Capture",
          "name": "Capture Job Detail",
          "method": "GET",
          "path": "/api/v1/session-captures/:capture_job_id/",
          "rawUrl": "{{base_url}}/api/v1/session-captures/:capture_job_id/",
          "description": "Capture Job Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/session-captures/:capture_job_id/.",
          "pathParams": [
            {
              "key": "capture_job_id",
              "value": "22222222-2222-4222-8222-222222222222",
              "description": "FacebookSessionCaptureJob UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "capture_job"
        },
        {
          "id": "09-sessions-capture--cancel-capture-job--post-api-v1-session-captures-capture-job-id-cancel",
          "group": "09 - Sessions & Capture",
          "name": "Cancel Capture Job",
          "method": "POST",
          "path": "/api/v1/session-captures/:capture_job_id/cancel/",
          "rawUrl": "{{base_url}}/api/v1/session-captures/:capture_job_id/cancel/",
          "description": "Cancel Capture Job. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/session-captures/:capture_job_id/cancel/.",
          "pathParams": [
            {
              "key": "capture_job_id",
              "value": "22222222-2222-4222-8222-222222222222",
              "description": "FacebookSessionCaptureJob UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            202,
            403,
            404,
            409
          ],
          "responseProfile": "capture_job"
        }
      ]
    },
    {
      "id": "group-10",
      "title": "Providers, Jobs & Schedules",
      "sourceTitle": "10 - Providers, Jobs & Schedules",
      "description": "Inspect provider health, create bounded crawl jobs, and manage recurring crawl schedules.",
      "endpoints": [
        {
          "id": "10-providers-jobs-schedules--provider-health--get-api-v1-provider-health",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Provider Health",
          "method": "GET",
          "path": "/api/v1/provider-health/",
          "rawUrl": "{{base_url}}/api/v1/provider-health/",
          "description": "Provider Health. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/provider-health/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "provider_health_list"
        },
        {
          "id": "10-providers-jobs-schedules--provider-health-detail--get-api-v1-provider-health-provider-id",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Provider Health Detail",
          "method": "GET",
          "path": "/api/v1/provider-health/:provider_id/",
          "rawUrl": "{{base_url}}/api/v1/provider-health/:provider_id/",
          "description": "Provider Health Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/provider-health/:provider_id/.",
          "pathParams": [
            {
              "key": "provider_id",
              "value": "1",
              "description": "ProviderHealth numeric primary key. Fake example.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "provider_health"
        },
        {
          "id": "10-providers-jobs-schedules--list-crawl-jobs--get-api-v1-crawl-jobs",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "List Crawl Jobs",
          "method": "GET",
          "path": "/api/v1/crawl-jobs/",
          "rawUrl": "{{base_url}}/api/v1/crawl-jobs/",
          "description": "List Crawl Jobs. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/crawl-jobs/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "crawl_job_list"
        },
        {
          "id": "10-providers-jobs-schedules--create-crawl-job--post-api-v1-crawl-jobs-capability-page-info-target-url-https-3a-2f-2fwww-facebook-com-2fbbcnews-faceb",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Create Crawl Job",
          "method": "POST",
          "path": "/api/v1/crawl-jobs/?capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&facebook_session=11111111-1111-4111-8111-111111111111&limit=1&priority=50&params=%7B%7D",
          "rawUrl": "{{base_url}}/api/v1/crawl-jobs/?capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&facebook_session=11111111-1111-4111-8111-111111111111&limit=1&priority=50&params=%7B%7D",
          "description": "Create Crawl Job. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/crawl-jobs/?capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&facebook_session=11111111-1111-4111-8111-111111111111&limit=1&priority=50&params=%7B%7D.",
          "pathParams": [],
          "query": [
            {
              "key": "capability",
              "value": "page.info",
              "description": "FacebookReach collection capability.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/bbcnews",
              "description": "Facebook target URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "Optional FacebookSession UUID.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "1",
              "description": "Maximum items requested by the crawl.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "priority",
              "value": "50",
              "description": "Crawl priority from 0 to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "params",
              "value": "{}",
              "description": "JSON object encoded as a query parameter. Example {} uses default crawl options.",
              "type": "json",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "10-providers-jobs-schedules--crawl-job-detail--get-api-v1-crawl-jobs-crawl-job-id",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Crawl Job Detail",
          "method": "GET",
          "path": "/api/v1/crawl-jobs/:crawl_job_id/",
          "rawUrl": "{{base_url}}/api/v1/crawl-jobs/:crawl_job_id/",
          "description": "Crawl Job Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/crawl-jobs/:crawl_job_id/.",
          "pathParams": [
            {
              "key": "crawl_job_id",
              "value": "44444444-4444-4444-8444-444444444444",
              "description": "CrawlJob UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "crawl_job"
        },
        {
          "id": "10-providers-jobs-schedules--list-crawl-schedules--get-api-v1-crawl-schedules",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "List Crawl Schedules",
          "method": "GET",
          "path": "/api/v1/crawl-schedules/",
          "rawUrl": "{{base_url}}/api/v1/crawl-schedules/",
          "description": "List Crawl Schedules. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/crawl-schedules/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "crawl_schedule_list"
        },
        {
          "id": "10-providers-jobs-schedules--create-crawl-schedule--post-api-v1-crawl-schedules-name-postman-example-schedule-enabled-false-capability-page-info-target-u",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Create Crawl Schedule",
          "method": "POST",
          "path": "/api/v1/crawl-schedules/?name=postman-example-schedule&enabled=false&capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&interval_minutes=60&limit=1&priority=50&params=%7B%7D",
          "rawUrl": "{{base_url}}/api/v1/crawl-schedules/?name=postman-example-schedule&enabled=false&capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&interval_minutes=60&limit=1&priority=50&params=%7B%7D",
          "description": "Create Crawl Schedule. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: POST {{base_url}}/api/v1/crawl-schedules/?name=postman-example-schedule&enabled=false&capability=page.info&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&interval_minutes=60&limit=1&priority=50&params=%7B%7D.",
          "pathParams": [],
          "query": [
            {
              "key": "name",
              "value": "postman-example-schedule",
              "description": "Human-readable name for the resource or session capture.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "enabled",
              "value": "false",
              "description": "true enables the schedule; false disables it.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "capability",
              "value": "page.info",
              "description": "FacebookReach collection capability.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/bbcnews",
              "description": "Facebook target URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "interval_minutes",
              "value": "60",
              "description": "Recurring crawl schedule interval in minutes.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "1",
              "description": "Maximum items requested by the crawl.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "priority",
              "value": "50",
              "description": "Crawl priority from 0 to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "params",
              "value": "{}",
              "description": "JSON object encoded as a query parameter. Example {} uses default crawl options.",
              "type": "json",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            201,
            400
          ],
          "responseProfile": "crawl_schedule"
        },
        {
          "id": "10-providers-jobs-schedules--crawl-schedule-detail--get-api-v1-crawl-schedules-schedule-id",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Crawl Schedule Detail",
          "method": "GET",
          "path": "/api/v1/crawl-schedules/:schedule_id/",
          "rawUrl": "{{base_url}}/api/v1/crawl-schedules/:schedule_id/",
          "description": "Crawl Schedule Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/crawl-schedules/:schedule_id/.",
          "pathParams": [
            {
              "key": "schedule_id",
              "value": "101",
              "description": "CrawlSchedule integer primary key. Fake example.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "crawl_schedule_list"
        },
        {
          "id": "10-providers-jobs-schedules--patch-crawl-schedule--patch-api-v1-crawl-schedules-schedule-id-enabled-false-interval-minutes-120",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Patch Crawl Schedule",
          "method": "PATCH",
          "path": "/api/v1/crawl-schedules/:schedule_id/?enabled=false&interval_minutes=120",
          "rawUrl": "{{base_url}}/api/v1/crawl-schedules/:schedule_id/?enabled=false&interval_minutes=120",
          "description": "Patch Crawl Schedule. Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: PATCH {{base_url}}/api/v1/crawl-schedules/:schedule_id/?enabled=false&interval_minutes=120.",
          "pathParams": [
            {
              "key": "schedule_id",
              "value": "101",
              "description": "CrawlSchedule integer primary key. Fake example.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "enabled",
              "value": "false",
              "description": "true enables the schedule; false disables it.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "interval_minutes",
              "value": "120",
              "description": "Recurring crawl schedule interval in minutes.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "crawl_schedule_list"
        },
        {
          "id": "10-providers-jobs-schedules--replace-crawl-schedule-put--put-api-v1-crawl-schedules-schedule-id-name-postman-example-schedule-enabled-false-capability-page-i",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Replace Crawl Schedule (PUT)",
          "method": "PUT",
          "path": "/api/v1/crawl-schedules/:schedule_id/?name=postman-example-schedule&enabled=false&capability=page.info&source=null&facebook_session=null&target_type=&target_external_id=&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&query=&requested_provider=&interval_minutes=120&limit=1&priority=50&params=%7B%7D",
          "rawUrl": "{{base_url}}/api/v1/crawl-schedules/:schedule_id/?name=postman-example-schedule&enabled=false&capability=page.info&source=null&facebook_session=null&target_type=&target_external_id=&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&query=&requested_provider=&interval_minutes=120&limit=1&priority=50&params=%7B%7D",
          "description": "Replace Crawl Schedule (PUT). Authentication is inherited as Authorization: Token {{api_token}}. All request inputs are request-local path/query parameters with fake example values and descriptions; replace them directly in Postman's Params tab before sending. Endpoint: PUT {{base_url}}/api/v1/crawl-schedules/:schedule_id/?name=postman-example-schedule&enabled=false&capability=page.info&source=null&facebook_session=null&target_type=&target_external_id=&target_url=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&query=&requested_provider=&interval_minutes=120&limit=1&priority=50&params=%7B%7D.",
          "pathParams": [
            {
              "key": "schedule_id",
              "value": "101",
              "description": "CrawlSchedule integer primary key. Fake example.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "name",
              "value": "postman-example-schedule",
              "description": "Human-readable name for the resource or session capture.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "enabled",
              "value": "false",
              "description": "true enables the schedule; false disables it.",
              "type": "boolean",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "capability",
              "value": "page.info",
              "description": "FacebookReach collection capability.",
              "type": "string",
              "requirement": "required",
              "disabled": false
            },
            {
              "key": "source",
              "value": "null",
              "description": "Optional FacebookSource UUID.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "facebook_session",
              "value": "null",
              "description": "Optional FacebookSession UUID.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "target_type",
              "value": "",
              "description": "Optional target classification.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "target_external_id",
              "value": "",
              "description": "Optional target external identifier.",
              "type": "uuid",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "target_url",
              "value": "https://www.facebook.com/bbcnews",
              "description": "Facebook target URL.",
              "type": "url",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "query",
              "value": "",
              "description": "Search text for search-style capabilities.",
              "type": "string",
              "requirement": "conditional",
              "disabled": false
            },
            {
              "key": "requested_provider",
              "value": "",
              "description": "Optional provider hint such as browser.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "interval_minutes",
              "value": "120",
              "description": "Recurring crawl schedule interval in minutes.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "limit",
              "value": "1",
              "description": "Maximum items requested by the crawl.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "priority",
              "value": "50",
              "description": "Crawl priority from 0 to 100.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "params",
              "value": "{}",
              "description": "JSON object encoded as a query parameter. Example {} uses default crawl options.",
              "type": "json",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "Media type of the request payload.",
              "disabled": false
            }
          ],
          "body": null,
          "statusCodes": [
            200,
            400,
            404
          ],
          "responseProfile": "crawl_schedule_list"
        },
        {
          "id": "10-providers-jobs-schedules--delete-crawl-schedule--delete-api-v1-crawl-schedules-schedule-id",
          "group": "10 - Providers, Jobs & Schedules",
          "name": "Delete Crawl Schedule",
          "method": "DELETE",
          "path": "/api/v1/crawl-schedules/:schedule_id/",
          "rawUrl": "{{base_url}}/api/v1/crawl-schedules/:schedule_id/",
          "description": "Delete Crawl Schedule. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: DELETE {{base_url}}/api/v1/crawl-schedules/:schedule_id/.",
          "pathParams": [
            {
              "key": "schedule_id",
              "value": "101",
              "description": "CrawlSchedule integer primary key. Fake example.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            204,
            404
          ],
          "responseProfile": "empty"
        }
      ]
    },
    {
      "id": "group-11",
      "title": "Cached Data & Elasticsearch",
      "sourceTitle": "11 - Cached Data & Elasticsearch",
      "description": "Read normalized records, media, events, Marketplace data, engagement snapshots, and Elasticsearch-backed search.",
      "endpoints": [
        {
          "id": "11-cached-data-elasticsearch--collected-records--get-api-v1-records-ordering-last-seen-at",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Collected Records",
          "method": "GET",
          "path": "/api/v1/records/?ordering=-last_seen_at",
          "rawUrl": "{{base_url}}/api/v1/records/?ordering=-last_seen_at",
          "description": "Collected Records. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/records/?ordering=-last_seen_at.",
          "pathParams": [],
          "query": [
            {
              "key": "ordering",
              "value": "-last_seen_at",
              "description": "DRF ordering expression, for example -created_at.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "11-cached-data-elasticsearch--record-detail--get-api-v1-records-record-id",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Record Detail",
          "method": "GET",
          "path": "/api/v1/records/:record_id/",
          "rawUrl": "{{base_url}}/api/v1/records/:record_id/",
          "description": "Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/records/:record_id/.",
          "pathParams": [
            {
              "key": "record_id",
              "value": "55555555-5555-4555-8555-555555555555",
              "description": "CollectedRecord UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "11-cached-data-elasticsearch--posts--get-api-v1-posts-ordering-published-at",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Posts",
          "method": "GET",
          "path": "/api/v1/posts/?ordering=-published_at",
          "rawUrl": "{{base_url}}/api/v1/posts/?ordering=-published_at",
          "description": "Posts. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/?ordering=-published_at.",
          "pathParams": [],
          "query": [
            {
              "key": "ordering",
              "value": "-published_at",
              "description": "DRF ordering expression, for example -created_at.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "11-cached-data-elasticsearch--comments-replies--get-api-v1-comments",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Comments & Replies",
          "method": "GET",
          "path": "/api/v1/comments/",
          "rawUrl": "{{base_url}}/api/v1/comments/",
          "description": "Comments & Replies. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/comments/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "11-cached-data-elasticsearch--media-assets--get-api-v1-media",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Media Assets",
          "method": "GET",
          "path": "/api/v1/media/",
          "rawUrl": "{{base_url}}/api/v1/media/",
          "description": "Media Assets. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/media/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "media_asset_list"
        },
        {
          "id": "11-cached-data-elasticsearch--media-detail--get-api-v1-media-media-id",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Media Detail",
          "method": "GET",
          "path": "/api/v1/media/:media_id/",
          "rawUrl": "{{base_url}}/api/v1/media/:media_id/",
          "description": "Media Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/media/:media_id/.",
          "pathParams": [
            {
              "key": "media_id",
              "value": "88888888-8888-4888-8888-888888888888",
              "description": "MediaAsset UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "media_asset"
        },
        {
          "id": "11-cached-data-elasticsearch--events--get-api-v1-events",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Events",
          "method": "GET",
          "path": "/api/v1/events/",
          "rawUrl": "{{base_url}}/api/v1/events/",
          "description": "Events. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/events/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "11-cached-data-elasticsearch--marketplace-listings--get-api-v1-marketplace-listings",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Marketplace Listings",
          "method": "GET",
          "path": "/api/v1/marketplace/listings/",
          "rawUrl": "{{base_url}}/api/v1/marketplace/listings/",
          "description": "Marketplace Listings. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/marketplace/listings/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "11-cached-data-elasticsearch--engagement--get-api-v1-engagement",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Engagement",
          "method": "GET",
          "path": "/api/v1/engagement/",
          "rawUrl": "{{base_url}}/api/v1/engagement/",
          "description": "Engagement. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/engagement/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "record_list"
        },
        {
          "id": "11-cached-data-elasticsearch--engagement-snapshots--get-api-v1-engagement-snapshots",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Engagement Snapshots",
          "method": "GET",
          "path": "/api/v1/engagement-snapshots/",
          "rawUrl": "{{base_url}}/api/v1/engagement-snapshots/",
          "description": "Engagement Snapshots. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Endpoint: GET {{base_url}}/api/v1/engagement-snapshots/.",
          "pathParams": [],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200
          ],
          "responseProfile": "engagement_snapshot_list"
        },
        {
          "id": "11-cached-data-elasticsearch--stored-elasticsearch-search--get-api-v1-search-q-bbc-20news-size-50-offset-0",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Stored Elasticsearch Search",
          "method": "GET",
          "path": "/api/v1/search/?q=BBC%20News&size=50&offset=0",
          "rawUrl": "{{base_url}}/api/v1/search/?q=BBC%20News&size=50&offset=0",
          "description": "Stored Elasticsearch Search. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/search/?q=BBC%20News&size=50&offset=0.",
          "pathParams": [],
          "query": [
            {
              "key": "q",
              "value": "BBC News",
              "description": "Full-text search query.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "size",
              "value": "50",
              "description": "Maximum Elasticsearch hits returned.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "offset",
              "value": "0",
              "description": "Zero-based Elasticsearch result offset.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            503
          ],
          "responseProfile": "search_result"
        },
        {
          "id": "11-cached-data-elasticsearch--post-record-detail--get-api-v1-posts-post-id",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Post Record Detail",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/",
          "description": "Post Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "11-cached-data-elasticsearch--comment-record-detail--get-api-v1-comments-comment-id",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Comment Record Detail",
          "method": "GET",
          "path": "/api/v1/comments/:comment_id/",
          "rawUrl": "{{base_url}}/api/v1/comments/:comment_id/",
          "description": "Comment Record Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/comments/:comment_id/.",
          "pathParams": [
            {
              "key": "comment_id",
              "value": "77777777-7777-4777-8777-777777777777",
              "description": "FacebookReach comment-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "11-cached-data-elasticsearch--event-detail--get-api-v1-events-event-id",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Event Detail",
          "method": "GET",
          "path": "/api/v1/events/:event_id/",
          "rawUrl": "{{base_url}}/api/v1/events/:event_id/",
          "description": "Event Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/events/:event_id/.",
          "pathParams": [
            {
              "key": "event_id",
              "value": "99999999-9999-4999-8999-999999999999",
              "description": "Event record UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "11-cached-data-elasticsearch--marketplace-listing-detail--get-api-v1-marketplace-listings-listing-id",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Marketplace Listing Detail",
          "method": "GET",
          "path": "/api/v1/marketplace/listings/:listing_id/",
          "rawUrl": "{{base_url}}/api/v1/marketplace/listings/:listing_id/",
          "description": "Marketplace Listing Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/marketplace/listings/:listing_id/.",
          "pathParams": [
            {
              "key": "listing_id",
              "value": "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
              "description": "MarketplaceListing record UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "11-cached-data-elasticsearch--engagement-detail--get-api-v1-engagement-engagement-id",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Engagement Detail",
          "method": "GET",
          "path": "/api/v1/engagement/:engagement_id/",
          "rawUrl": "{{base_url}}/api/v1/engagement/:engagement_id/",
          "description": "Engagement Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/engagement/:engagement_id/.",
          "pathParams": [
            {
              "key": "engagement_id",
              "value": "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb",
              "description": "Engagement record UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "record"
        },
        {
          "id": "11-cached-data-elasticsearch--engagement-snapshot-detail--get-api-v1-engagement-snapshots-snapshot-id",
          "group": "11 - Cached Data & Elasticsearch",
          "name": "Engagement Snapshot Detail",
          "method": "GET",
          "path": "/api/v1/engagement-snapshots/:snapshot_id/",
          "rawUrl": "{{base_url}}/api/v1/engagement-snapshots/:snapshot_id/",
          "description": "Engagement Snapshot Detail. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/engagement-snapshots/:snapshot_id/.",
          "pathParams": [
            {
              "key": "snapshot_id",
              "value": "202",
              "description": "EngagementSnapshot integer primary key. Fake example.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [
            200,
            404
          ],
          "responseProfile": "engagement_snapshot"
        }
      ]
    },
    {
      "id": "group-12",
      "title": "Workspace Data Graph",
      "sourceTitle": "12 - Workspace Data Graph",
      "description": "Consumer-oriented source, post, and session workspaces with compact previews, section endpoints, and cursor pagination.",
      "endpoints": [
        {
          "id": "12-workspace-data-graph--source-workspace--get-api-v1-sources-source-id-workspace",
          "group": "12 - Workspace Data Graph",
          "name": "Source Workspace",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/workspace/",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/workspace/",
          "description": "Source Workspace. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/workspace/.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "source_workspace"
        },
        {
          "id": "12-workspace-data-graph--source-posts-first-page--get-api-v1-sources-source-id-posts-limit-20",
          "group": "12 - Workspace Data Graph",
          "name": "Source Posts - First Page",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/posts/?limit=20",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/posts/?limit=20",
          "description": "Source Posts - First Page. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/posts/?limit=20.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-posts-next-cursor--get-api-v1-sources-source-id-posts-limit-20-cursor-example-cursor-token",
          "group": "12 - Workspace Data Graph",
          "name": "Source Posts - Next Cursor",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/posts/?limit=20&cursor=example-cursor-token",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/posts/?limit=20&cursor=example-cursor-token",
          "description": "Source Posts - Next Cursor. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/posts/?limit=20&cursor=example-cursor-token.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            },
            {
              "key": "cursor",
              "value": "example-cursor-token",
              "description": "Pagination cursor returned by the previous response. Keep disabled until you have a real cursor.",
              "type": "string",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-friends--get-api-v1-sources-source-id-friends-limit-50",
          "group": "12 - Workspace Data Graph",
          "name": "Source Friends",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/friends/?limit=50",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/friends/?limit=50",
          "description": "Source Friends. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/friends/?limit=50.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "50",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-group-posts--get-api-v1-sources-source-id-group-posts-limit-20",
          "group": "12 - Workspace Data Graph",
          "name": "Source Group Posts",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/group-posts/?limit=20",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/group-posts/?limit=20",
          "description": "Source Group Posts. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/group-posts/?limit=20.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-comments--get-api-v1-sources-source-id-comments-limit-25",
          "group": "12 - Workspace Data Graph",
          "name": "Source Comments",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/comments/?limit=25",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/comments/?limit=25",
          "description": "Source Comments. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/comments/?limit=25.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "25",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-replies--get-api-v1-sources-source-id-replies-limit-25",
          "group": "12 - Workspace Data Graph",
          "name": "Source Replies",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/replies/?limit=25",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/replies/?limit=25",
          "description": "Source Replies. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/replies/?limit=25.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "25",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-reactions--get-api-v1-sources-source-id-reactions-limit-50",
          "group": "12 - Workspace Data Graph",
          "name": "Source Reactions",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/reactions/?limit=50",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/reactions/?limit=50",
          "description": "Source Reactions. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/reactions/?limit=50.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "50",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-reactors--get-api-v1-sources-source-id-reactors-limit-50",
          "group": "12 - Workspace Data Graph",
          "name": "Source Reactors",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/reactors/?limit=50",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/reactors/?limit=50",
          "description": "Source Reactors. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/reactors/?limit=50.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "50",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-shares--get-api-v1-sources-source-id-shares-limit-50",
          "group": "12 - Workspace Data Graph",
          "name": "Source Shares",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/shares/?limit=50",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/shares/?limit=50",
          "description": "Source Shares. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/shares/?limit=50.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "50",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-events--get-api-v1-sources-source-id-events-limit-20",
          "group": "12 - Workspace Data Graph",
          "name": "Source Events",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/events/?limit=20",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/events/?limit=20",
          "description": "Source Events. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/events/?limit=20.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--source-media--get-api-v1-sources-source-id-media-limit-30",
          "group": "12 - Workspace Data Graph",
          "name": "Source Media",
          "method": "GET",
          "path": "/api/v1/sources/:source_id/media/?limit=30",
          "rawUrl": "{{base_url}}/api/v1/sources/:source_id/media/?limit=30",
          "description": "Source Media. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sources/:source_id/media/?limit=30.",
          "pathParams": [
            {
              "key": "source_id",
              "value": "33333333-3333-4333-8333-333333333333",
              "description": "FacebookSource UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "30",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_media_list"
        },
        {
          "id": "12-workspace-data-graph--post-workspace--get-api-v1-posts-post-id-workspace",
          "group": "12 - Workspace Data Graph",
          "name": "Post Workspace",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/workspace/",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/workspace/",
          "description": "Post Workspace. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/workspace/.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--post-comments--get-api-v1-posts-post-id-comments-limit-25",
          "group": "12 - Workspace Data Graph",
          "name": "Post Comments",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/comments/?limit=25",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/comments/?limit=25",
          "description": "Post Comments. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/comments/?limit=25.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "25",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--post-replies--get-api-v1-posts-post-id-replies-limit-25",
          "group": "12 - Workspace Data Graph",
          "name": "Post Replies",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/replies/?limit=25",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/replies/?limit=25",
          "description": "Post Replies. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/replies/?limit=25.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "25",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--post-reactions--get-api-v1-posts-post-id-reactions-limit-50",
          "group": "12 - Workspace Data Graph",
          "name": "Post Reactions",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/reactions/?limit=50",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/reactions/?limit=50",
          "description": "Post Reactions. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/reactions/?limit=50.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "50",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--post-reactors--get-api-v1-posts-post-id-reactors-limit-50",
          "group": "12 - Workspace Data Graph",
          "name": "Post Reactors",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/reactors/?limit=50",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/reactors/?limit=50",
          "description": "Post Reactors. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/reactors/?limit=50.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "50",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--post-shares--get-api-v1-posts-post-id-shares-limit-50",
          "group": "12 - Workspace Data Graph",
          "name": "Post Shares",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/shares/?limit=50",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/shares/?limit=50",
          "description": "Post Shares. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/shares/?limit=50.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "50",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--post-media--get-api-v1-posts-post-id-media-limit-30",
          "group": "12 - Workspace Data Graph",
          "name": "Post Media",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/media/?limit=30",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/media/?limit=30",
          "description": "Post Media. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/media/?limit=30.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "30",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_media_list"
        },
        {
          "id": "12-workspace-data-graph--post-engagement-history--get-api-v1-posts-post-id-engagement-history-limit-25",
          "group": "12 - Workspace Data Graph",
          "name": "Post Engagement History",
          "method": "GET",
          "path": "/api/v1/posts/:post_id/engagement-history/?limit=25",
          "rawUrl": "{{base_url}}/api/v1/posts/:post_id/engagement-history/?limit=25",
          "description": "Post Engagement History. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/posts/:post_id/engagement-history/?limit=25.",
          "pathParams": [
            {
              "key": "post_id",
              "value": "66666666-6666-4666-8666-666666666666",
              "description": "FacebookReach collected post-record UUID. Fake UUID; replace it with a real record ID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "25",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_snapshot_list"
        },
        {
          "id": "12-workspace-data-graph--session-workspace--get-api-v1-sessions-session-id-workspace",
          "group": "12 - Workspace Data Graph",
          "name": "Session Workspace",
          "method": "GET",
          "path": "/api/v1/sessions/:session_id/workspace/",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/workspace/",
          "description": "Session Workspace. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sessions/:session_id/workspace/.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "session_workspace"
        },
        {
          "id": "12-workspace-data-graph--session-feed--get-api-v1-sessions-session-id-feed-limit-20",
          "group": "12 - Workspace Data Graph",
          "name": "Session Feed",
          "method": "GET",
          "path": "/api/v1/sessions/:session_id/feed/?limit=20",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/feed/?limit=20",
          "description": "Session Feed. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sessions/:session_id/feed/?limit=20.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--session-groups--get-api-v1-sessions-session-id-groups-limit-20",
          "group": "12 - Workspace Data Graph",
          "name": "Session Groups",
          "method": "GET",
          "path": "/api/v1/sessions/:session_id/groups/?limit=20",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/groups/?limit=20",
          "description": "Session Groups. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sessions/:session_id/groups/?limit=20.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--session-notifications--get-api-v1-sessions-session-id-notifications-limit-20",
          "group": "12 - Workspace Data Graph",
          "name": "Session Notifications",
          "method": "GET",
          "path": "/api/v1/sessions/:session_id/notifications/?limit=20",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/notifications/?limit=20",
          "description": "Session Notifications. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sessions/:session_id/notifications/?limit=20.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--session-events--get-api-v1-sessions-session-id-events-limit-20",
          "group": "12 - Workspace Data Graph",
          "name": "Session Events",
          "method": "GET",
          "path": "/api/v1/sessions/:session_id/events/?limit=20",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/events/?limit=20",
          "description": "Session Events. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sessions/:session_id/events/?limit=20.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        },
        {
          "id": "12-workspace-data-graph--session-search-results--get-api-v1-sessions-session-id-search-results-limit-20",
          "group": "12 - Workspace Data Graph",
          "name": "Session Search Results",
          "method": "GET",
          "path": "/api/v1/sessions/:session_id/search-results/?limit=20",
          "rawUrl": "{{base_url}}/api/v1/sessions/:session_id/search-results/?limit=20",
          "description": "Session Search Results. Authentication is inherited from the collection as Authorization: Token {{api_token}}. Path and query parameters contain fake, request-local example values with descriptions; replace them directly in this request before sending. Endpoint: GET {{base_url}}/api/v1/sessions/:session_id/search-results/?limit=20.",
          "pathParams": [
            {
              "key": "session_id",
              "value": "11111111-1111-4111-8111-111111111111",
              "description": "FacebookSession UUID. Fake UUID.",
              "type": "uuid",
              "requirement": "required",
              "disabled": false
            }
          ],
          "query": [
            {
              "key": "limit",
              "value": "20",
              "description": "Maximum number of records/items requested by the endpoint.",
              "type": "integer",
              "requirement": "optional",
              "disabled": false
            }
          ],
          "headers": [],
          "body": null,
          "statusCodes": [],
          "responseProfile": "workspace_record_list"
        }
      ]
    }
  ],
  "schemas": {
    "liveness": {
      "label": "Liveness response",
      "fields": [
        {
          "name": "status",
          "type": "string",
          "example": "ok"
        }
      ]
    },
    "readiness": {
      "label": "Readiness response",
      "fields": [
        {
          "name": "status",
          "type": "string",
          "example": "ready"
        },
        {
          "name": "detail",
          "type": "string",
          "example": "All required dependencies are available."
        }
      ]
    },
    "source": {
      "label": "Facebook source",
      "fields": [
        {
          "name": "id",
          "type": "uuid",
          "example": "33333333-3333-4333-8333-333333333333"
        },
        {
          "name": "source_type",
          "type": "string",
          "example": "page"
        },
        {
          "name": "external_id",
          "type": "string",
          "example": "228735667216"
        },
        {
          "name": "username",
          "type": "string",
          "example": "bbcnews"
        },
        {
          "name": "name",
          "type": "string",
          "example": "BBC News"
        },
        {
          "name": "canonical_url",
          "type": "url",
          "example": "https://www.facebook.com/bbcnews"
        },
        {
          "name": "profile_picture_url",
          "type": "url",
          "example": "https://example.com/profile.jpg"
        },
        {
          "name": "description",
          "type": "string",
          "example": "News and current affairs."
        },
        {
          "name": "followers_count",
          "type": "integer",
          "example": 64000000
        },
        {
          "name": "following_count",
          "type": "integer",
          "example": 75
        },
        {
          "name": "friends_count",
          "type": "integer",
          "example": null
        },
        {
          "name": "is_verified",
          "type": "boolean",
          "example": true
        },
        {
          "name": "crawl_enabled",
          "type": "boolean",
          "example": true
        },
        {
          "name": "download_media",
          "type": "boolean",
          "example": true
        },
        {
          "name": "monitoring_enabled",
          "type": "boolean",
          "example": true
        },
        {
          "name": "monitoring_status",
          "type": "string",
          "example": "active"
        },
        {
          "name": "monitoring_interval_minutes",
          "type": "integer",
          "example": 1
        },
        {
          "name": "monitoring_session",
          "type": "uuid",
          "example": null
        },
        {
          "name": "monitoring_bootstrap_batch",
          "type": "uuid",
          "example": null
        },
        {
          "name": "monitoring_bootstrap_started_at",
          "type": "datetime",
          "example": null
        },
        {
          "name": "monitoring_bootstrap_completed_at",
          "type": "datetime",
          "example": null
        },
        {
          "name": "last_monitor_run_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "last_monitor_error",
          "type": "string",
          "example": ""
        },
        {
          "name": "metadata",
          "type": "object",
          "example": {}
        },
        {
          "name": "first_seen_at",
          "type": "datetime",
          "example": "2026-09-21T08:00:00Z"
        },
        {
          "name": "last_seen_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "last_crawled_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        }
      ]
    },
    "session": {
      "label": "Facebook session",
      "fields": [
        {
          "name": "id",
          "type": "uuid",
          "example": "11111111-1111-4111-8111-111111111111"
        },
        {
          "name": "name",
          "type": "string",
          "example": "primary"
        },
        {
          "name": "facebook_user_id",
          "type": "string",
          "example": "100012345678901"
        },
        {
          "name": "status",
          "type": "string",
          "example": "active"
        },
        {
          "name": "user_agent",
          "type": "string",
          "example": "Mozilla/5.0 ..."
        },
        {
          "name": "locale",
          "type": "string",
          "example": "en-US"
        },
        {
          "name": "is_active",
          "type": "boolean",
          "example": true
        },
        {
          "name": "has_storage_state",
          "type": "boolean",
          "example": true
        },
        {
          "name": "capability_health",
          "type": "array<object>",
          "example": []
        },
        {
          "name": "last_verified_at",
          "type": "datetime",
          "example": "2026-09-22T11:55:00Z"
        },
        {
          "name": "expires_at",
          "type": "datetime",
          "example": null
        },
        {
          "name": "created_at",
          "type": "datetime",
          "example": "2026-09-20T10:00:00Z"
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "example": "2026-09-22T11:55:00Z"
        }
      ]
    },
    "capture_availability": {
      "label": "Capture availability",
      "fields": [
        {
          "name": "enabled",
          "type": "boolean",
          "example": true
        },
        {
          "name": "queue",
          "type": "string",
          "example": "session_capture"
        },
        {
          "name": "timeout_seconds",
          "type": "integer",
          "example": 600
        },
        {
          "name": "requires_visible_browser",
          "type": "boolean",
          "example": true
        },
        {
          "name": "requires_local_capture_worker",
          "type": "boolean",
          "example": true
        },
        {
          "name": "worker_command",
          "type": "string",
          "example": "celery -A core worker -Q session_capture --pool=solo -l INFO --hostname=session-capture@%h"
        }
      ]
    },
    "capture_job": {
      "label": "Facebook session capture job",
      "fields": [
        {
          "name": "id",
          "type": "uuid",
          "example": "22222222-2222-4222-8222-222222222222"
        },
        {
          "name": "name",
          "type": "string",
          "example": "postman-account"
        },
        {
          "name": "replace",
          "type": "boolean",
          "example": false
        },
        {
          "name": "locale",
          "type": "string",
          "example": "en-US"
        },
        {
          "name": "status",
          "type": "string",
          "example": "queued"
        },
        {
          "name": "error_code",
          "type": "string",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "example": "Queued for interactive Facebook login."
        },
        {
          "name": "celery_task_id",
          "type": "string",
          "example": "4aa86e..."
        },
        {
          "name": "cancel_requested",
          "type": "boolean",
          "example": false
        },
        {
          "name": "facebook_session",
          "type": "uuid",
          "example": null
        },
        {
          "name": "facebook_session_name",
          "type": "string",
          "example": null
        },
        {
          "name": "started_at",
          "type": "datetime",
          "example": null
        },
        {
          "name": "finished_at",
          "type": "datetime",
          "example": null
        },
        {
          "name": "created_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        }
      ]
    },
    "provider_run": {
      "label": "Provider run",
      "fields": [
        {
          "name": "id",
          "type": "integer",
          "example": 51
        },
        {
          "name": "provider",
          "type": "string",
          "example": "browser"
        },
        {
          "name": "status",
          "type": "string",
          "example": "success"
        },
        {
          "name": "request_count",
          "type": "integer",
          "example": 1
        },
        {
          "name": "items_received",
          "type": "integer",
          "example": 10
        },
        {
          "name": "error_code",
          "type": "string",
          "example": ""
        },
        {
          "name": "error_message",
          "type": "string",
          "example": ""
        },
        {
          "name": "metadata",
          "type": "object",
          "example": {}
        },
        {
          "name": "started_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "finished_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:08Z"
        }
      ]
    },
    "crawl_job": {
      "label": "Crawl job",
      "fields": [
        {
          "name": "id",
          "type": "uuid",
          "example": "44444444-4444-4444-8444-444444444444"
        },
        {
          "name": "capability",
          "type": "string",
          "example": "page.info"
        },
        {
          "name": "target_type",
          "type": "string",
          "example": "page"
        },
        {
          "name": "target_external_id",
          "type": "string",
          "example": "228735667216"
        },
        {
          "name": "target_url",
          "type": "url",
          "example": "https://www.facebook.com/bbcnews"
        },
        {
          "name": "query",
          "type": "string",
          "example": ""
        },
        {
          "name": "source",
          "type": "uuid",
          "example": null
        },
        {
          "name": "facebook_session",
          "type": "uuid",
          "example": "11111111-1111-4111-8111-111111111111"
        },
        {
          "name": "status",
          "type": "string",
          "example": "success"
        },
        {
          "name": "requested_provider",
          "type": "string",
          "example": ""
        },
        {
          "name": "selected_provider",
          "type": "string",
          "example": "browser"
        },
        {
          "name": "priority",
          "type": "integer",
          "example": 50
        },
        {
          "name": "limit",
          "type": "integer",
          "example": 1
        },
        {
          "name": "params",
          "type": "object",
          "example": {}
        },
        {
          "name": "attempt_count",
          "type": "integer",
          "example": 1
        },
        {
          "name": "items_discovered",
          "type": "integer",
          "example": 1
        },
        {
          "name": "items_created",
          "type": "integer",
          "example": 1
        },
        {
          "name": "items_updated",
          "type": "integer",
          "example": 0
        },
        {
          "name": "items_unchanged",
          "type": "integer",
          "example": 0
        },
        {
          "name": "items_skipped",
          "type": "integer",
          "example": 0
        },
        {
          "name": "items_failed",
          "type": "integer",
          "example": 0
        },
        {
          "name": "error_message",
          "type": "string",
          "example": ""
        },
        {
          "name": "started_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "finished_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:08Z"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:08Z"
        },
        {
          "name": "provider_runs",
          "type": "array<object>",
          "example": []
        }
      ]
    },
    "crawl_schedule": {
      "label": "Crawl schedule",
      "fields": [
        {
          "name": "id",
          "type": "integer",
          "example": 101
        },
        {
          "name": "name",
          "type": "string",
          "example": "bbc-page-monitor"
        },
        {
          "name": "enabled",
          "type": "boolean",
          "example": true
        },
        {
          "name": "capability",
          "type": "string",
          "example": "page.info"
        },
        {
          "name": "source",
          "type": "uuid",
          "example": null
        },
        {
          "name": "facebook_session",
          "type": "uuid",
          "example": null
        },
        {
          "name": "target_type",
          "type": "string",
          "example": "page"
        },
        {
          "name": "target_external_id",
          "type": "string",
          "example": ""
        },
        {
          "name": "target_url",
          "type": "url",
          "example": "https://www.facebook.com/bbcnews"
        },
        {
          "name": "query",
          "type": "string",
          "example": ""
        },
        {
          "name": "requested_provider",
          "type": "string",
          "example": ""
        },
        {
          "name": "interval_minutes",
          "type": "integer",
          "example": 60
        },
        {
          "name": "limit",
          "type": "integer",
          "example": 1
        },
        {
          "name": "priority",
          "type": "integer",
          "example": 50
        },
        {
          "name": "params",
          "type": "object",
          "example": {}
        },
        {
          "name": "next_run_at",
          "type": "datetime",
          "example": "2026-09-22T13:00:00Z"
        },
        {
          "name": "last_run_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "last_job",
          "type": "uuid",
          "example": "44444444-4444-4444-8444-444444444444"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "example": "2026-09-21T12:00:00Z"
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        }
      ]
    },
    "record": {
      "label": "Collected record",
      "fields": [
        {
          "name": "id",
          "type": "uuid",
          "example": "55555555-5555-4555-8555-555555555555"
        },
        {
          "name": "crawl_job",
          "type": "uuid",
          "example": "44444444-4444-4444-8444-444444444444"
        },
        {
          "name": "source",
          "type": "uuid",
          "example": "33333333-3333-4333-8333-333333333333"
        },
        {
          "name": "capability",
          "type": "string",
          "example": "page.posts"
        },
        {
          "name": "record_type",
          "type": "string",
          "example": "post"
        },
        {
          "name": "provider",
          "type": "string",
          "example": "browser"
        },
        {
          "name": "external_id",
          "type": "string",
          "example": "123456789012345"
        },
        {
          "name": "parent_external_id",
          "type": "string",
          "example": ""
        },
        {
          "name": "canonical_url",
          "type": "url",
          "example": "https://www.facebook.com/example/posts/123456789012345"
        },
        {
          "name": "author_name",
          "type": "string",
          "example": "Example Page"
        },
        {
          "name": "author_url",
          "type": "url",
          "example": "https://www.facebook.com/example"
        },
        {
          "name": "title",
          "type": "string",
          "example": ""
        },
        {
          "name": "text",
          "type": "string",
          "example": "Example Facebook post text."
        },
        {
          "name": "published_at",
          "type": "datetime",
          "example": "2026-09-22T11:30:00Z"
        },
        {
          "name": "metrics",
          "type": "object",
          "example": {
            "reaction_count": 120,
            "comment_count": 14
          }
        },
        {
          "name": "media",
          "type": "array<object>",
          "example": []
        },
        {
          "name": "payload",
          "type": "object",
          "example": {}
        },
        {
          "name": "first_seen_at",
          "type": "datetime",
          "example": "2026-09-22T11:31:00Z"
        },
        {
          "name": "last_seen_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        }
      ]
    },
    "media_asset": {
      "label": "Media asset",
      "fields": [
        {
          "name": "id",
          "type": "uuid",
          "example": "66666666-6666-4666-8666-666666666666"
        },
        {
          "name": "record",
          "type": "uuid",
          "example": "55555555-5555-4555-8555-555555555555"
        },
        {
          "name": "external_url",
          "type": "url",
          "example": "https://scontent.example/fb-image.jpg"
        },
        {
          "name": "storage_key",
          "type": "string",
          "example": "facebook/2026/09/example.jpg"
        },
        {
          "name": "media_type",
          "type": "string",
          "example": "image"
        },
        {
          "name": "mime_type",
          "type": "string",
          "example": "image/jpeg"
        },
        {
          "name": "width",
          "type": "integer",
          "example": 1200
        },
        {
          "name": "height",
          "type": "integer",
          "example": 630
        },
        {
          "name": "duration",
          "type": "number",
          "example": null
        },
        {
          "name": "sha256",
          "type": "string",
          "example": "d2f5..."
        },
        {
          "name": "size_bytes",
          "type": "integer",
          "example": 183420
        },
        {
          "name": "status",
          "type": "string",
          "example": "stored"
        },
        {
          "name": "last_error",
          "type": "string",
          "example": ""
        },
        {
          "name": "created_at",
          "type": "datetime",
          "example": "2026-09-22T11:31:00Z"
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "example": "2026-09-22T11:31:02Z"
        }
      ]
    },
    "provider_health": {
      "label": "Provider health",
      "fields": [
        {
          "name": "name",
          "type": "string",
          "example": "browser"
        },
        {
          "name": "status",
          "type": "string",
          "example": "healthy"
        },
        {
          "name": "consecutive_failures",
          "type": "integer",
          "example": 0
        },
        {
          "name": "last_success_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:08Z"
        },
        {
          "name": "last_failure_at",
          "type": "datetime",
          "example": null
        },
        {
          "name": "cooldown_until",
          "type": "datetime",
          "example": null
        },
        {
          "name": "message",
          "type": "string",
          "example": ""
        },
        {
          "name": "metadata",
          "type": "object",
          "example": {}
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:08Z"
        }
      ]
    },
    "engagement_snapshot": {
      "label": "Engagement snapshot",
      "fields": [
        {
          "name": "id",
          "type": "uuid",
          "example": "77777777-7777-4777-8777-777777777777"
        },
        {
          "name": "record",
          "type": "uuid",
          "example": "55555555-5555-4555-8555-555555555555"
        },
        {
          "name": "reaction_count",
          "type": "integer",
          "example": 120
        },
        {
          "name": "comment_count",
          "type": "integer",
          "example": 14
        },
        {
          "name": "share_count",
          "type": "integer",
          "example": 6
        },
        {
          "name": "view_count",
          "type": "integer",
          "example": 3250
        },
        {
          "name": "like_count",
          "type": "integer",
          "example": 88
        },
        {
          "name": "love_count",
          "type": "integer",
          "example": 18
        },
        {
          "name": "care_count",
          "type": "integer",
          "example": 2
        },
        {
          "name": "haha_count",
          "type": "integer",
          "example": 6
        },
        {
          "name": "wow_count",
          "type": "integer",
          "example": 3
        },
        {
          "name": "sad_count",
          "type": "integer",
          "example": 2
        },
        {
          "name": "angry_count",
          "type": "integer",
          "example": 1
        },
        {
          "name": "reaction_breakdown",
          "type": "object",
          "example": {
            "like": 88,
            "love": 18
          }
        },
        {
          "name": "captured_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        }
      ]
    },
    "workspace_record_card": {
      "label": "Workspace record card",
      "fields": [
        {
          "name": "id",
          "type": "uuid",
          "example": "55555555-5555-4555-8555-555555555555"
        },
        {
          "name": "capability",
          "type": "string",
          "example": "page.posts"
        },
        {
          "name": "record_type",
          "type": "string",
          "example": "post"
        },
        {
          "name": "external_id",
          "type": "string",
          "example": "123456789012345"
        },
        {
          "name": "parent_external_id",
          "type": "string",
          "example": ""
        },
        {
          "name": "canonical_url",
          "type": "url",
          "example": "https://www.facebook.com/example/posts/123"
        },
        {
          "name": "author_name",
          "type": "string",
          "example": "Example Page"
        },
        {
          "name": "author_url",
          "type": "url",
          "example": "https://www.facebook.com/example"
        },
        {
          "name": "title",
          "type": "string",
          "example": ""
        },
        {
          "name": "text_preview",
          "type": "string",
          "example": "Example Facebook post text."
        },
        {
          "name": "published_at",
          "type": "datetime",
          "example": "2026-09-22T11:30:00Z"
        },
        {
          "name": "metrics",
          "type": "object",
          "example": {
            "reaction_count": 120
          }
        },
        {
          "name": "first_seen_at",
          "type": "datetime",
          "example": "2026-09-22T11:31:00Z"
        },
        {
          "name": "last_seen_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        }
      ]
    },
    "workspace_pagination": {
      "label": "Workspace cursor pagination",
      "fields": [
        {
          "name": "pagination.limit",
          "type": "integer",
          "example": 20
        },
        {
          "name": "pagination.next_cursor",
          "type": "string",
          "example": "cD0yMDI2LTA5LTIy..."
        },
        {
          "name": "pagination.previous_cursor",
          "type": "string",
          "example": null
        },
        {
          "name": "pagination.has_more",
          "type": "boolean",
          "example": true
        },
        {
          "name": "pagination.has_previous",
          "type": "boolean",
          "example": false
        }
      ]
    },
    "source_workspace": {
      "label": "Source workspace",
      "fields": [
        {
          "name": "source.id",
          "type": "uuid",
          "example": "33333333-3333-4333-8333-333333333333"
        },
        {
          "name": "source.source_type",
          "type": "string",
          "example": "page"
        },
        {
          "name": "source.external_id",
          "type": "string",
          "example": "228735667216"
        },
        {
          "name": "source.username",
          "type": "string",
          "example": "bbcnews"
        },
        {
          "name": "source.name",
          "type": "string",
          "example": "BBC News"
        },
        {
          "name": "source.canonical_url",
          "type": "url",
          "example": "https://www.facebook.com/bbcnews"
        },
        {
          "name": "source.profile_picture_url",
          "type": "url",
          "example": "https://example.com/profile.jpg"
        },
        {
          "name": "source.description",
          "type": "string",
          "example": "News and current affairs."
        },
        {
          "name": "source.is_verified",
          "type": "boolean",
          "example": true
        },
        {
          "name": "source.followers_count",
          "type": "integer",
          "example": 64000000
        },
        {
          "name": "source.following_count",
          "type": "integer",
          "example": 75
        },
        {
          "name": "source.friends_count",
          "type": "integer",
          "example": null
        },
        {
          "name": "monitoring.enabled",
          "type": "boolean",
          "example": true
        },
        {
          "name": "monitoring.status",
          "type": "string",
          "example": "active"
        },
        {
          "name": "monitoring.download_media",
          "type": "boolean",
          "example": true
        },
        {
          "name": "monitoring.monitoring_interval_minutes",
          "type": "integer",
          "example": 1
        },
        {
          "name": "monitoring.last_crawled_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "monitoring.last_monitor_run_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "stats.status",
          "type": "string",
          "example": "ready"
        },
        {
          "name": "stats.posts",
          "type": "integer",
          "example": 120
        },
        {
          "name": "stats.comments",
          "type": "integer",
          "example": 430
        },
        {
          "name": "stats.replies",
          "type": "integer",
          "example": 95
        },
        {
          "name": "stats.reactions",
          "type": "integer",
          "example": 120
        },
        {
          "name": "stats.reactors",
          "type": "integer",
          "example": 850
        },
        {
          "name": "stats.shares",
          "type": "integer",
          "example": 40
        },
        {
          "name": "stats.media",
          "type": "integer",
          "example": 180
        },
        {
          "name": "stats.friends",
          "type": "integer",
          "example": 0
        },
        {
          "name": "stats.groups",
          "type": "integer",
          "example": 0
        },
        {
          "name": "stats.events",
          "type": "integer",
          "example": 3
        },
        {
          "name": "stats.latest_post_at",
          "type": "datetime",
          "example": "2026-09-22T11:30:00Z"
        },
        {
          "name": "stats.latest_activity_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "stats.last_rebuilt_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "stats.refresh_queued",
          "type": "boolean",
          "example": false
        },
        {
          "name": "preview.posts",
          "type": "array<object>",
          "example": []
        },
        {
          "name": "preview.media",
          "type": "array<object>",
          "example": []
        },
        {
          "name": "sections",
          "type": "object",
          "example": {}
        },
        {
          "name": "collection.info_capability",
          "type": "string",
          "example": "page.info"
        },
        {
          "name": "collection.posts_capability",
          "type": "string",
          "example": "page.posts"
        },
        {
          "name": "collection.running_jobs",
          "type": "integer",
          "example": 0
        },
        {
          "name": "collection.failed_sections",
          "type": "array<string>",
          "example": []
        },
        {
          "name": "collection.completeness_percent",
          "type": "integer",
          "example": 100
        },
        {
          "name": "related_scopes.session_workspace",
          "type": "string",
          "example": null
        },
        {
          "name": "related_scopes.sessions",
          "type": "string",
          "example": "/api/v1/sessions/"
        },
        {
          "name": "related_scopes.global_search",
          "type": "string",
          "example": "/api/v1/search/"
        },
        {
          "name": "related_scopes.note",
          "type": "string",
          "example": "Viewer/session-scoped data is intentionally not attributed to this source."
        },
        {
          "name": "snapshot.version",
          "type": "string",
          "example": "12ab34cd56ef78ab"
        },
        {
          "name": "snapshot.source_updated_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "snapshot.stats_updated_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        }
      ]
    },
    "post_workspace": {
      "label": "Post workspace",
      "fields": [
        {
          "name": "post",
          "type": "object",
          "example": {}
        },
        {
          "name": "engagement",
          "type": "object",
          "example": {}
        },
        {
          "name": "post_metadata.timestamp",
          "type": "datetime",
          "example": "2026-09-22T11:30:00Z"
        },
        {
          "name": "post_metadata.url",
          "type": "url",
          "example": "https://www.facebook.com/example/posts/123"
        },
        {
          "name": "post_metadata.timestamp_record_id",
          "type": "uuid",
          "example": null
        },
        {
          "name": "post_metadata.url_record_id",
          "type": "uuid",
          "example": null
        },
        {
          "name": "preview.comments",
          "type": "array<object>",
          "example": []
        },
        {
          "name": "preview.reactors",
          "type": "array<object>",
          "example": []
        },
        {
          "name": "preview.media",
          "type": "array<object>",
          "example": []
        },
        {
          "name": "sections",
          "type": "object",
          "example": {}
        },
        {
          "name": "source",
          "type": "object",
          "example": {
            "id": "33333333-3333-4333-8333-333333333333",
            "workspace": "/api/v1/sources/33333333-3333-4333-8333-333333333333/workspace/"
          }
        }
      ]
    },
    "session_workspace": {
      "label": "Session workspace",
      "fields": [
        {
          "name": "session.id",
          "type": "uuid",
          "example": "11111111-1111-4111-8111-111111111111"
        },
        {
          "name": "session.name",
          "type": "string",
          "example": "primary"
        },
        {
          "name": "session.status",
          "type": "string",
          "example": "active"
        },
        {
          "name": "session.is_active",
          "type": "boolean",
          "example": true
        },
        {
          "name": "session.last_verified_at",
          "type": "datetime",
          "example": "2026-09-22T11:55:00Z"
        },
        {
          "name": "preview.feed",
          "type": "array<object>",
          "example": []
        },
        {
          "name": "sections",
          "type": "object",
          "example": {}
        },
        {
          "name": "global_search",
          "type": "string",
          "example": "/api/v1/search/"
        },
        {
          "name": "scope_note",
          "type": "string",
          "example": "These records are viewer/session scoped."
        }
      ]
    },
    "capability": {
      "label": "Capability metadata",
      "fields": [
        {
          "name": "capability",
          "type": "string",
          "example": "page.posts"
        },
        {
          "name": "description",
          "type": "string",
          "example": "Collect visible Page posts."
        },
        {
          "name": "required_authorized_session",
          "type": "boolean",
          "example": false
        },
        {
          "name": "provider_priority",
          "type": "array<string>",
          "example": [
            "graphql",
            "browser"
          ]
        },
        {
          "name": "registered_providers",
          "type": "array<string>",
          "example": [
            "graphql",
            "browser"
          ]
        }
      ]
    },
    "verify_session": {
      "label": "Session verification queue response",
      "fields": [
        {
          "name": "facebook_session",
          "type": "uuid",
          "example": "11111111-1111-4111-8111-111111111111"
        },
        {
          "name": "name",
          "type": "string",
          "example": "primary"
        },
        {
          "name": "status",
          "type": "string",
          "example": "queued"
        },
        {
          "name": "verification_task_id",
          "type": "string",
          "example": "7a2b..."
        },
        {
          "name": "detail",
          "type": "string",
          "example": "Session verification queued. Poll the session resource for updated status."
        }
      ]
    },
    "error": {
      "label": "Error response",
      "fields": [
        {
          "name": "detail",
          "type": "string",
          "example": "The request could not be processed."
        },
        {
          "name": "error_code",
          "type": "string",
          "example": "validation_error"
        }
      ]
    },
    "generic": {
      "label": "Response object",
      "fields": [
        {
          "name": "detail",
          "type": "string",
          "example": "Response fields depend on the endpoint operation."
        }
      ]
    },
    "source_monitor": {
      "label": "Source monitor status",
      "fields": [
        {
          "name": "enabled",
          "type": "boolean",
          "example": true
        },
        {
          "name": "status",
          "type": "string",
          "example": "active"
        },
        {
          "name": "monitoring_interval_minutes",
          "type": "integer",
          "example": 1
        },
        {
          "name": "monitoring_session",
          "type": "uuid",
          "example": null
        },
        {
          "name": "last_monitor_run_at",
          "type": "datetime",
          "example": "2026-09-22T12:00:00Z"
        },
        {
          "name": "last_monitor_error",
          "type": "string",
          "example": ""
        }
      ]
    },
    "source_monitor_action": {
      "label": "Source monitor action",
      "fields": [
        {
          "name": "enabled",
          "type": "boolean",
          "example": true
        },
        {
          "name": "status",
          "type": "string",
          "example": "active"
        },
        {
          "name": "detail",
          "type": "string",
          "example": "Source monitoring action accepted."
        }
      ]
    }
  },
  "fieldDescriptions": {
    "id": "Stable identifier for this FacebookReach resource.",
    "name": "Human-readable name of the resource.",
    "status": "Current lifecycle, health, collection, or processing state.",
    "source_type": "Facebook source category: profile, page, or group.",
    "external_id": "Provider/Facebook external identifier when one is available.",
    "username": "Facebook username or source slug.",
    "canonical_url": "Normalized canonical Facebook URL.",
    "profile_picture_url": "Profile/Page/Group image URL observed during collection.",
    "description": "Source description/about text returned by Facebook when visible.",
    "followers_count": "Observed follower count for the source.",
    "following_count": "Observed following count for the source.",
    "friends_count": "Observed friend count when visible to the authorized viewer.",
    "is_verified": "Whether the source was observed as verified.",
    "crawl_enabled": "Whether FacebookReach is allowed to create crawl work for this source.",
    "download_media": "Whether discovered binary media should be downloaded when supported.",
    "monitoring_enabled": "Whether recurring source monitoring is enabled.",
    "monitoring_status": "Asynchronous source monitoring state such as pending, bootstrapping, active, degraded, error, or disabled.",
    "monitoring_interval_minutes": "Configured interval between recurring source-monitor checks.",
    "monitoring_session": "Preferred FacebookSession UUID; null/omitted allows healthy session-pool routing.",
    "monitoring_bootstrap_batch": "Identifier for the most recent source bootstrap batch.",
    "monitoring_bootstrap_started_at": "Timestamp when the current/last bootstrap started.",
    "monitoring_bootstrap_completed_at": "Timestamp when the current/last bootstrap completed.",
    "last_monitor_run_at": "Timestamp of the latest source-monitor execution.",
    "last_monitor_error": "Latest source-monitor error message, empty when no error is recorded.",
    "metadata": "Structured server/provider metadata that does not fit the normalized first-class fields.",
    "first_seen_at": "Timestamp when FacebookReach first persisted this resource or record.",
    "last_seen_at": "Timestamp when FacebookReach most recently observed this resource or record.",
    "last_crawled_at": "Timestamp of the most recent crawl associated with this source.",
    "updated_at": "Timestamp when this resource was most recently updated in FacebookReach.",
    "facebook_user_id": "Facebook account ID associated with this authorized session when known.",
    "user_agent": "Browser user-agent associated with the captured Facebook session.",
    "locale": "Browser locale used by the Facebook session or capture job.",
    "is_active": "Whether the Facebook session is enabled for routing.",
    "has_storage_state": "True when encrypted browser storage state exists server-side; the state itself is never returned by the API.",
    "capability_health": "Per-capability health entries used by session routing.",
    "last_verified_at": "Timestamp when the session was last successfully verified.",
    "expires_at": "Session expiry timestamp when known.",
    "capability": "FacebookReach capability that produced or will produce this data.",
    "consecutive_failures": "Number of consecutive failures currently tracked for this capability/provider.",
    "last_failure_code": "Most recent normalized failure code.",
    "cooldown_until": "Timestamp until which routing should avoid this session/provider capability.",
    "last_success_at": "Timestamp of the most recent successful operation.",
    "last_failure_at": "Timestamp of the most recent failed operation.",
    "replace": "Whether an existing named Facebook session should be replaced.",
    "error_code": "Stable machine-readable error code when an operation fails.",
    "message": "Human-readable status or diagnostic message.",
    "celery_task_id": "Celery task identifier used for asynchronous execution.",
    "cancel_requested": "Whether cancellation has been requested for the capture job.",
    "facebook_session": "FacebookSession UUID used or preferred by this job/resource.",
    "facebook_session_name": "Human-readable name of the related Facebook session.",
    "started_at": "Timestamp when execution started.",
    "finished_at": "Timestamp when execution finished.",
    "created_at": "Timestamp when this resource was created.",
    "provider": "Collector/provider that produced a run or normalized record.",
    "request_count": "Number of provider requests made during this run.",
    "items_received": "Number of items returned by the provider for this run.",
    "error_message": "Human-readable error details captured by the job/provider.",
    "provider_runs": "Per-provider execution attempts associated with a crawl job.",
    "target_type": "Normalized target category for a crawl job or schedule.",
    "target_external_id": "Target Facebook external ID when supplied or discovered.",
    "target_url": "Target Facebook URL used for collection.",
    "query": "Search text used by search-oriented capabilities.",
    "source": "Related FacebookSource UUID, or a nested source object in workspace payloads.",
    "requested_provider": "Optional provider explicitly requested by the client.",
    "selected_provider": "Provider ultimately selected to execute the crawl.",
    "priority": "Requested crawl priority. API examples use values from 0 to 100.",
    "limit": "Maximum number of records/items requested or page size for workspace endpoints.",
    "params": "Additional structured crawl options.",
    "attempt_count": "Number of attempts made to execute the crawl job.",
    "items_discovered": "Total provider items discovered during execution.",
    "items_created": "Number of new normalized records created.",
    "items_updated": "Number of existing records updated.",
    "items_unchanged": "Number of existing records found unchanged.",
    "items_skipped": "Number of discovered items intentionally skipped.",
    "items_failed": "Number of items that failed normalization or persistence.",
    "enabled": "Whether the resource, schedule, or API feature is enabled.",
    "interval_minutes": "Recurring CrawlSchedule interval in minutes.",
    "next_run_at": "Next time the recurring crawl schedule is due to run.",
    "last_run_at": "Most recent time the recurring schedule ran.",
    "last_job": "Most recent CrawlJob UUID created by this schedule.",
    "crawl_job": "CrawlJob UUID that produced this normalized record.",
    "record_type": "Normalized record type such as post, comment, reply, event, reactor, or summary type.",
    "parent_external_id": "External ID of the parent Facebook object when the record is nested.",
    "author_name": "Visible author/display name associated with the record.",
    "author_url": "Visible Facebook URL for the author when available.",
    "title": "Normalized title/headline when the object exposes one.",
    "text": "Normalized textual content.",
    "text_preview": "Whitespace-normalized preview of text, truncated for workspace list responses.",
    "published_at": "Original publication timestamp when the provider exposed it.",
    "metrics": "Normalized engagement/count metrics available for the record.",
    "media": "Structured media metadata embedded in a normalized record.",
    "payload": "Provider-specific normalized payload retained for fields outside the common model.",
    "record": "CollectedRecord UUID associated with this object.",
    "external_url": "Original Facebook/FBCDN media URL.",
    "storage_key": "Object-storage key when a binary media file has been persisted.",
    "media_type": "Normalized media category such as image or video.",
    "mime_type": "Detected or declared media MIME type.",
    "width": "Media width in pixels when known.",
    "height": "Media height in pixels when known.",
    "duration": "Media duration when applicable and known.",
    "sha256": "SHA-256 checksum of downloaded media when available.",
    "size_bytes": "Stored/downloaded media size in bytes when available.",
    "last_error": "Latest media processing error, empty when no error is recorded.",
    "reaction_count": "Total reactions observed for the record at snapshot time.",
    "comment_count": "Total comments observed for the record at snapshot time.",
    "share_count": "Total shares observed for the record at snapshot time.",
    "view_count": "Total views observed for the record at snapshot time when available.",
    "like_count": "Observed Like reaction count.",
    "love_count": "Observed Love reaction count.",
    "care_count": "Observed Care reaction count.",
    "haha_count": "Observed Haha reaction count.",
    "wow_count": "Observed Wow reaction count.",
    "sad_count": "Observed Sad reaction count.",
    "angry_count": "Observed Angry reaction count.",
    "reaction_breakdown": "Structured reaction counts by reaction type.",
    "captured_at": "Timestamp when the engagement snapshot was captured.",
    "queue": "Celery queue name used for interactive capture.",
    "timeout_seconds": "Maximum configured duration for interactive capture.",
    "requires_visible_browser": "Whether the operation requires a visible interactive Chromium browser.",
    "requires_local_capture_worker": "Whether a dedicated local capture worker is required.",
    "worker_command": "Reference Celery command for starting the interactive capture worker.",
    "verification_task_id": "Celery task ID for queued session verification.",
    "detail": "Human-readable API detail or error explanation.",
    "count": "Number of items in a section or standard paginated response.",
    "next": "URL for the next page in DRF pagination when available.",
    "previous": "URL for the previous page in DRF pagination when available.",
    "results": "Array of result objects returned by a list endpoint.",
    "pagination.limit": "Effective cursor page size.",
    "pagination.next_cursor": "Opaque cursor for the next workspace page; null when there is no next page.",
    "pagination.previous_cursor": "Opaque cursor for the previous workspace page; null when there is no previous page.",
    "pagination.has_more": "True when another forward cursor page is available.",
    "pagination.has_previous": "True when a previous cursor page is available.",
    "source.id": "FacebookSource UUID for the workspace.",
    "source.source_type": "Source type for the workspace: profile, page, or group.",
    "source.external_id": "Facebook external identifier for the source when known.",
    "source.username": "Facebook username/slug for the source when known.",
    "source.name": "Display name most recently collected for the source.",
    "source.canonical_url": "Canonical Facebook URL for the source.",
    "source.profile_picture_url": "Source profile image URL when visible.",
    "source.description": "Source description/about text when visible.",
    "source.is_verified": "Observed Facebook verification state.",
    "source.followers_count": "Observed follower count.",
    "source.following_count": "Observed following count.",
    "source.friends_count": "Observed friend count when applicable and visible.",
    "monitoring.enabled": "Whether source monitoring is enabled.",
    "monitoring.status": "Current source-monitoring state.",
    "monitoring.download_media": "Current media download policy for the source.",
    "monitoring.monitoring_interval_minutes": "Configured source monitoring interval.",
    "monitoring.last_crawled_at": "Timestamp of the most recent source crawl.",
    "monitoring.last_monitor_run_at": "Timestamp of the most recent monitor execution.",
    "stats.status": "Whether cached source statistics are ready or rebuilding.",
    "stats.posts": "Cached count of source post records.",
    "stats.comments": "Cached count of source comment records.",
    "stats.replies": "Cached count of source reply records.",
    "stats.reactions": "Cached count of source reaction summary records.",
    "stats.reactors": "Cached count of visible reactor records.",
    "stats.shares": "Cached count of source share records/summaries.",
    "stats.media": "Cached count of source media assets.",
    "stats.friends": "Cached count of friend records.",
    "stats.groups": "Cached count of group-related records.",
    "stats.events": "Cached count of event records.",
    "stats.latest_post_at": "Publication time of the latest known post.",
    "stats.latest_activity_at": "Timestamp of the latest known source activity.",
    "stats.last_rebuilt_at": "Timestamp when source statistics were last rebuilt.",
    "stats.refresh_queued": "Whether an asynchronous statistics rebuild was queued.",
    "preview.posts": "Small array of recent normalized post cards.",
    "preview.media": "Small array of recent media assets.",
    "sections": "Map of workspace sections and their availability/count metadata.",
    "collection.info_capability": "Information capability used for this source type.",
    "collection.posts_capability": "Post-list capability used for this source type.",
    "collection.running_jobs": "Number of pending/running CrawlJobs for the source.",
    "collection.failed_sections": "Capabilities whose most recent source job failed or was rate-limited.",
    "collection.completeness_percent": "Percentage of applicable workspace sections with successful/partial/available data.",
    "related_scopes.session_workspace": "Session workspace URL when the source has a preferred monitoring session.",
    "related_scopes.sessions": "Global Sessions API path.",
    "related_scopes.global_search": "Global search API path.",
    "related_scopes.note": "Scope note explaining which viewer/session data is intentionally not attributed to a source.",
    "snapshot.version": "Short workspace snapshot version used to build the ETag.",
    "snapshot.source_updated_at": "Source update timestamp represented by the snapshot.",
    "snapshot.stats_updated_at": "Statistics update timestamp represented by the snapshot.",
    "post": "Normalized post detail used as the root of a post workspace.",
    "engagement": "Latest engagement snapshot, or engagement counts synthesized from the post metrics.",
    "post_metadata.timestamp": "Canonical post timestamp selected from the post or timestamp record.",
    "post_metadata.url": "Canonical post URL selected from the post or URL record.",
    "post_metadata.timestamp_record_id": "Backing timestamp record UUID when one exists.",
    "post_metadata.url_record_id": "Backing URL record UUID when one exists.",
    "session.id": "FacebookSession UUID represented by the workspace.",
    "session.name": "Human-readable FacebookSession name.",
    "session.status": "Current session lifecycle/verification state.",
    "session.is_active": "Whether the session is active for routing.",
    "session.last_verified_at": "Most recent verification timestamp.",
    "global_search": "Global search API path related to the session workspace.",
    "scope_note": "Explanation that viewer-scoped data belongs to the authorized session rather than one Facebook source.",
    "required_authorized_session": "Whether this capability requires an authorized Facebook browser session.",
    "provider_priority": "Configured provider preference order for the capability.",
    "registered_providers": "Providers currently registered to service the capability."
  }
};
