# QA Checklist — [Project Name]

Run each loop pass against the relevant section. `[x]` = verified with evidence.

## Functional
- [ ] Core user path works end-to-end
- [ ] Edge/empty/error states handled
- [ ] No console errors at runtime
- [ ] Lint + typecheck + build green

## Responsive
- [ ] 360px / 768px / 1024px / 1440px layouts sane
- [ ] No horizontal overflow
- [ ] Mobile nav / taps work without hover
- [ ] Font scale does not clip content

## Accessibility
- [ ] Single h1 per page; heading order logical
- [ ] Landmarks + labels present (`aria-label` on navs/icons)
- [ ] All controls keyboard operable; visible focus ring
- [ ] `prefers-reduced-motion` respected
- [ ] Color contrast for text on surfaces

## Performance
- [ ] Heavy assets lazy-loaded / deferred
- [ ] No render-blocking third-party requests
- [ ] Loops/timers paused when out of view

## Content integrity
- [ ] No placeholder text leaks into rendered UI
- [ ] No fabricated metrics/claims
- [ ] Placeholder `[owner:…]`/`[project:…]` handled (hidden or replaced)