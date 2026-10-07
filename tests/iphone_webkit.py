"""iPhone check in WebKit (Safari's engine). Serve the PWA first:
  python tools/build.py pwa  then  python -m http.server 8765 --directory dist/ios-pwa
Needs: pip install playwright  then  playwright install webkit
"""
import pathlib
from playwright.sync_api import sync_playwright
AUTO = open(pathlib.Path(__file__).with_name('run_lessons.py')).read().split('AUTO = """')[1].split('"""')[0]
with sync_playwright() as p:
    dev = p.devices['iPhone 13']
    b = p.webkit.launch(); ctx = b.new_context(**dev); pg = ctx.new_page()
    errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/'); pg.wait_for_timeout(2500)
    print('engine: WebKit', b.version, '| UA iPhone:', 'iPhone' in pg.evaluate('navigator.userAgent'))
    print('service worker:', pg.evaluate("navigator.serviceWorker ? navigator.serviceWorker.getRegistration().then(r => !!r) : 'n/a'"))
    print('install hint shown:', pg.query_selector('.ioshint') is not None)
    print('fonts:', pg.evaluate("document.fonts.check('700 16px \"Baloo 2\"')"), '| speechSynthesis present:', pg.evaluate("'speechSynthesis' in window"))
    pg.screenshot(path='dist/pwa_learn.png')
    pg.evaluate("document.querySelector('.ioshint') && document.querySelector('.ioshint').remove(); S.settings.unlockAll=true; void 0")
    pg.evaluate("startLesson('2-R-0','test'); void 0"); pg.wait_for_timeout(500); pg.screenshot(path='dist/pwa_brief.png')
    pg.click('.bskip'); pg.wait_for_timeout(300); pg.screenshot(path='dist/pwa_lesson.png')
    r = pg.evaluate(AUTO, [60, 0.9]); print('lesson run:', {k: r[k] for k in r if k != 't'}, '| done:', pg.evaluate("JSON.stringify(S.done['2-R-0'])"))
    pg.evaluate("S.settings.brief='off'; void 0")
    for lid in ['1-L-0', '3-W-0', '4-S-1']:
        pg.evaluate(f"startLesson('{lid}','practice'); void 0"); pg.wait_for_timeout(150); r = pg.evaluate(AUTO, [60, 0.9]); print(lid, 'finished:', r.get('finished'))
    pg.evaluate("TAB='profile'; render(); scrollTo(0,0); void 0"); pg.wait_for_timeout(400); pg.screenshot(path='dist/pwa_profile.png')
    pg.evaluate("TAB='custom'; render(); void 0"); pg.wait_for_timeout(200)
    print('smallest form-field font on touch:', pg.evaluate("Math.min(...[...document.querySelectorAll('input,select,textarea')].map(e => parseFloat(getComputedStyle(e).fontSize)))"), 'px')
    pg.evaluate("TAB='learn'; render(); void 0")
    print('progress saved in storage:', pg.evaluate("!!localStorage.getItem(LSKEY)"))
    print('page errors:', errs or 'none')
    b.close()
