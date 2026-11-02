# Contributing to ARC-01

## Before you begin

Fork the repository, install it with `npm ci`, and confirm that it runs locally. Search existing Issues and Discussions before opening a duplicate report.

## Report a finding

Include:

- a short, specific title;
- the page or feature involved;
- browser and operating system;
- exact reproduction steps;
- expected and observed behaviour; and
- useful evidence without personal information.

One well-reproduced finding is more useful than several vague claims. Do not publish passwords, tokens, private contact details, or destructive proof-of-concept code.

## Make a change

Use a focused branch and keep the change understandable. Prefer small commits with messages such as:

```text
fix: restore the resource download path
test: cover catalogue filtering
docs: clarify the verification steps
```

Before submitting, run:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Explain what changed, why it changed, how it was tested, and what remains unresolved. Screenshots are useful for visual work but should not replace reproduction steps or tests.

## Pull requests

Pull requests are welcome as contribution evidence, but upstream merging is optional and remains at the maintainers' discretion. A submitted pull request should link its related observations and keep unrelated changes out of scope.

Be respectful in Issues, Discussions, reviews, and commit messages. Organizers may clarify requirements but will not provide complete solutions or debug an entire submission.
