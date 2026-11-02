# ARC-01

## The Lantern Archive

**Audit · Repair · Contribute**

The Lantern Archive is a deliberately unfinished learning-resource website for the CSI VIT Chennai Technical Recruitment Project Challenge. It contains a small catalogue of beginner guides that visitors should be able to find, read, and download.

Your task is to investigate the experience, identify reproducible findings, make focused improvements, and explain how you verified the result. Clear reasoning and dependable changes matter more than the number of features added.

## Challenge objective

Your completed work should include:

- at least two reproducible observations;
- one fix for a problem that affects finding, opening, or downloading a resource;
- one additional focused improvement;
- one new or improved repeatable check; and
- a short explanation of the work, verification, and remaining limitations.

Observations may cover behaviour, interface quality, accessibility, reliability, code clarity, testing, or another relevant area. Do not attempt to exploit services, access private information, or introduce unsafe code.

## Run locally

### Prerequisites

- Node.js 24 LTS
- npm
- Git

```bash
git clone <your-fork-url>
cd arc-01
npm ci
npm run dev
```

Open the local address printed in the terminal. No account, secret, database, or external API is required.

## Quality commands

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

The existing tests are a baseline, not proof that every important behaviour works. Add or improve a repeatable check that supports your contribution.

## Suggested workflow

1. Fork the repository and create a focused branch.
2. Run the application before changing it.
3. Record clear reproduction steps for your observations.
4. Make the smallest coherent changes that address your chosen scope.
5. Run the relevant checks and inspect the application again.
6. Use meaningful commits and document remaining limitations honestly.
7. Submit one stable repository or pull-request URL through the official submission form.

Evidence may be recorded in Issues, Discussions, a pull-request description, your fork's Wiki, or a short handover note. Reviewers must be able to locate it from the URL you submit.

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

## Originality and conduct

You may read documentation and use development tools, but you must understand and be able to explain the work you submit. Credit any meaningful external source or reused material. Do not copy another participant's submission or misrepresent generated work as reasoning you cannot explain.

Use official recruitment channels for announcements and support. Public questions may be raised through repository Discussions. Opening an Issue or pull request does not guarantee that it will be accepted or merged upstream.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an upstream Issue or pull request.

## Rights

This repository is provided only for the ARC-01 assessment under the limited terms in [LICENSE.md](LICENSE.md). It is not released under an open-source license.

Maintained by the **CSI VIT Chennai Technical Team**.
