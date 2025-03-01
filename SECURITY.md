# Security Policy

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

If you discover any security-related issues in this project, please report them privately by:

- Opening a [GitHub Security Advisory](https://github.com/carvalhoandre/ac-portfolio/security/advisories)
- Emailing me directly at [carvalho.devel@gmail.com]

I will respond to your report within 3 business days and work to address any valid vulnerabilities as soon as possible.

## Security Practices

This portfolio project follows these security practices:

1. **Dependency Management**: Regular updates of third-party dependencies
2. **React Version Monitoring**: Strict tracking of React versions and security patches
3. **Code Review**: All changes are reviewed before merging
4. **Static Analysis**: Basic security checks in CI/CD (when implemented)
5. **HTTPS Enforcement**: All external resources are loaded over secure connections

## React Version Policy

**Security Alert:** This project specifically tracks React version security. We currently use React [version] or higher.

- Supported Versions: React 18.x and above
- Update Commitment: Critical security updates will be applied within 48 hours of React's official patch release
- Monitoring: Version tracking through [npm/Dependabot/GitHub alerts] (specify your method)

To verify the React version used:
```json
// package.json
"dependencies": {
  "react": "^18.2.0"
}
