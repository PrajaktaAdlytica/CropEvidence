import gsap from 'gsap';

/** Scroll-linked chapters: enter, hold for reading, then leave. Reverses naturally on scroll-up. */
export function setupHomeMotion(root) {
  const compact = window.matchMedia('(max-width: 700px)').matches;
  const distance = compact ? 26 : 46;
  const select = selector => [...root.querySelectorAll(selector)];
  const handled = new Set();

  function reveal(element, index = 0, horizontal = false) {
    if (!element || handled.has(element)) return;
    handled.add(element);
    element.dataset.scrollReveal = 'true';
    const entry = Math.min(.27, window.innerHeight * .19 / (element.offsetHeight + window.innerHeight * .86));
    const x = horizontal && !compact ? (index % 2 ? 32 : -32) : 0;
    gsap.timeline({
      defaults: {ease: 'none'},
      scrollTrigger: {
        trigger: element,
        start: `top ${94 - index % 4 * 1.5}%`,
        end: 'bottom 7%',
        scrub: compact ? .35 : .65,
        invalidateOnRefresh: true,
      },
    })
      .fromTo(element, {x, y: distance, opacity: .08}, {x: 0, y: 0, opacity: 1, duration: entry})
      .to(element, {x: 0, y: 0, opacity: 1, duration: 1 - entry * 2})
      .to(element, {x: -x * .35, y: -distance * .55, opacity: .08, duration: entry});
  }

  // Unpack broad text groups, so a headline and its evidence arrive in a clear sequence.
  select('.evidence-copy>h2,.evidence-copy>p,.comparison,.review-copy>h2,.review-copy>p,.review-copy>.button,.review-subline')
    .forEach((element, index) => reveal(element, index, element.matches('h2')));
  select('[data-reveal]').filter(element => !element.matches('.evidence-copy,.review-copy'))
    .forEach((element, index) => reveal(element, index, element.matches('.chapter-heading,.pricing-intro,.faq-intro')));
  select('.walkthrough-steps>button,.shared-record-strip,.buyer-note,.protocol-resource,.permission-bottom,.incumbent-note,.resource-source-link,.faq-list details')
    .forEach((element, index) => reveal(element, index));

  // The three field layers separate as the hero leaves; the same path resolves on return.
  gsap.timeline({scrollTrigger: {trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .9}})
    .to('.hero-field', {y: compact ? -18 : -55, scale: compact ? 1 : 1.035, ease: 'none'}, 0)
    .to('.hero-upper-map', {y: compact ? -20 : -90, ease: 'none'}, 0)
    .to('.hero-map', {y: compact ? 12 : 38, ease: 'none'}, 0);

  // Visual artifacts get restrained depth; labels and controls remain in their own stable layout.
  [
    ['.evidence-art', '.evidence', 50, -30],
    ['.gate-art', '.review-section', 36, -24],
    ['.pilot-field>img', '.pilot-chapter', 34, -18],
  ].forEach(([target, trigger, from, to]) => {
    gsap.fromTo(target, {y: compact ? from * .45 : from}, {
      y: compact ? to * .45 : to, ease: 'none',
      scrollTrigger: {trigger, start: 'top 95%', end: 'bottom 5%', scrub: .85, invalidateOnRefresh: true},
    });
  });
  select('.layer-labels li').forEach((element, index) => reveal(element, index, true));
  return () => handled.forEach(element => delete element.dataset.scrollReveal);
}
