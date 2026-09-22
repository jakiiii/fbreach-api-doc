# FacebookReach API Documentation

Public, dependency-free API documentation for FacebookReach, built with plain HTML, CSS, and JavaScript.

## Live documentation

https://jakiiii.github.io/fbreach-apidoc/

## Source of truth

The endpoint catalog is generated from:

`jakiiii/facebook-reach/documentation/postman/Facebook_Reach_Collection_API.postman_collection.json`

The current catalog documents **148 requests across 13 sections**, including:

- API health and discovery
- Profile and Post collection
- Facebook post/profile search
- Collection tasks
- Grouped Facebook APIs
- Sources and monitoring
- Sessions and interactive capture
- Providers, crawl jobs, and schedules
- Cached data and Elasticsearch search
- Source, Post, and Session workspace/data graph APIs

## Documentation UX

- Jamdesk-inspired two-column endpoint pages
- Search with `Ctrl/Command + K`
- Every documented path/query parameter includes description, type, requirement, and example value
- Response-field documentation based on FacebookReach serializers and workspace payloads
- cURL, Python, and JavaScript examples
- Editable example base URL and session-only API token input
- Copy-to-clipboard actions
- Light and dark themes
- Responsive mobile sidebar

## Deployment

Pushes to `main` are validated and deployed automatically with `.github/workflows/pages.yml`.

The workflow validates both JavaScript files with Node before publishing to GitHub Pages.

## Security

Do not commit real API tokens, Facebook cookies, storage state, passwords, or other credentials. The docs only use fake/example values.