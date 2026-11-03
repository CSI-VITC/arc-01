# ARC-01 · The Lantern Archive

[![ARC-01 checks](https://github.com/CSI-VITC/arc-01/actions/workflows/ci.yml/badge.svg)](https://github.com/CSI-VITC/arc-01/actions/workflows/ci.yml)

**Audit · Repair · Contribute**

> Candidate release for the CSI VIT Chennai Technical Recruitment Project Challenge.

The Lantern Archive is a deliberately unfinished learning-resource website. It contains a compact catalogue of beginner guides that visitors should be able to find, read, and download—but a green test suite does not guarantee that every important journey works as expected.

Your task is to investigate the experience, document reproducible findings, make focused improvements, and explain how you verified the result. Clear reasoning and dependable changes matter more than the number of features added.

| Project detail | Value |
|---|---|
| Application | React, TypeScript and Vite |
| Focus areas | Debugging, accessibility, testing and code quality |
| Data and services | Local content only; no account, database or external API |
| Deployment | Optional |
| Maintainer | CSI VIT Chennai Technical Team |

## Challenge objective

Your completed work should include:

- at least two reproducible observations;
- one fix for a problem that affects finding, opening, or downloading a resource;
- one additional focused improvement;
- one new or improved repeatable check; and
- a short explanation of the work, verification, and remaining limitations.

Observations may cover behaviour, interface quality, accessibility, reliability, code clarity, testing, or another relevant area. Do not attempt to exploit services, access private information, or introduce unsafe code.

## Get started

### Prerequisites

- Node.js `>=24.15.0 <25`
- npm `>=11`
- Git

Fork the repository, then clone your fork:

```bash
git clone <your-fork-url>
cd arc-01
npm ci
npm run dev
```

Open the local address printed in the terminal.

## Project commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run lint` | Check source-code conventions |
| `npm run typecheck` | Check the TypeScript source |
| `npm run test` | Run the baseline interaction tests once |
| `npm run build` | Create and validate the production build |
| `npm run preview` | Preview the production build locally |

Run the complete verification set before submitting:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

The existing tests are a baseline, not proof that every important behaviour works. Add or improve a repeatable check that supports your contribution.

## Repository map

```text
arc-01/
├── .github/              # CI and contribution templates
├── public/resources/     # Safe, local plain-text resources
├── src/components/       # Shared interface structure
├── src/data/             # Resource catalogue data
├── src/pages/            # Catalogue, resource and recovery pages
├── src/test/             # Test environment setup
├── CONTRIBUTING.md       # Contribution expectations
├── LICENSE.md            # Limited assessment-use terms
└── README.md              # Challenge and setup guide
```

## Suggested workflow

1. Fork the repository and create a focused branch.
2. Run the application before changing it.
3. Record clear reproduction steps for your observations.
4. Make the smallest coherent changes that address your chosen scope.
5. Run the relevant checks and inspect the application again.
6. Use meaningful commits and document remaining limitations honestly.
7. Submit one stable repository or pull-request URL through the official submission form.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an upstream Issue or pull request.

## Record your evidence

You may document work through:

- GitHub Issues with clear reproduction steps;
- [repository Discussions](https://github.com/CSI-VITC/arc-01/discussions);
- a pull-request description;
- your fork's Wiki; or
- a short handover note in your fork.

Your final submission must provide one stable repository or pull-request URL from which reviewers can locate the relevant code and evidence. Opening an Issue or pull request does not guarantee that it will be accepted or merged upstream.

## Submission checklist

- [ ] The project installs and runs from a fresh checkout.
- [ ] At least two observations include reproduction steps.
- [ ] One resource-flow problem is addressed.
- [ ] One additional improvement is included.
- [ ] One repeatable check is added or improved.
- [ ] Lint, type-check, tests, and build have been run.
- [ ] The final link exposes the relevant code and evidence.
- [ ] No secret, personal information, generated dependency folder, or unsafe file is committed.

Deployment is optional. A working local project with clear evidence is sufficient.

## Originality and responsible conduct

You may read documentation and use development tools, but you must understand and be able to explain the work you submit. Credit any meaningful external source or reused material. Do not copy another participant's submission or misrepresent generated work as reasoning you cannot explain.

Use official recruitment channels for announcements and schedule changes. Use [Discussions](https://github.com/CSI-VITC/arc-01/discussions) for public technical questions after checking whether the question was already answered. Organizers may clarify the challenge but will not provide complete solutions or debug an entire submission.

## Rights and maintainers

This repository is provided only for the ARC-01 assessment under the limited terms in [LICENSE.md](LICENSE.md). It is not released under an open-source license.

Maintained by the **CSI VIT Chennai Technical Team**.
