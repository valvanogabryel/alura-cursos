export function isMobile() {
  return (
    Cypress.config('viewportWidth') <=
    Cypress.env('mobileViewportWidthBreakpoint')
  );
}
