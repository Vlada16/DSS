import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer/interview testimonials',
    paragraph: 'Excerpts from interviews showing the need for finding compatibility between room mates. Quotes are in Romanian, as were the interviews.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Colegii de cameră din modul erau mai închistați [...]
                    Înaintea mea mai venise un tip de anul 1, iar mama lui era deranjată că era mizerie pe modul și i-au dat afară pe amândoi. [...]
                    Nu l-au mai lăsat în cameră.
                    <br/> [...] <br/> Le-a spus colegilor de modul să nu comenteze căci sunt pâinea lui Dumnezeu.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Nicu</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Interviu-2</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Efectiv nu prea mă deranja că era jeg. [...]
                    M-am înțeles foarte bine cu colegii cu toate că erau ani mai mari. Doar că ei mai consumau niște plante pe acolo și nu prea mă încânta treaba asta.
                    <br/>[...]<br/>
                    Da, chiar ne-am înțeles super bine. Chiar și acum mă întâlnesc cu ei căci ei încă sunt în acel cămin.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Nicu</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Interviu-2</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — În primul an nu m-am înțeles cu colegele pentru că eu sunt puțin obsedată de curățenie, iar ele erau opusul.
                    [...] dacă stăteam non-stop, da, ar fi trebuit să fac o schimbare. [...]
                    <br/>
                    În al doilea an am nimerit niște colege super ok cu care țin legatura și acum.
                    Eram pe aceeași lungime de undă să zic așa. [...]
                    Exista respect reciproc.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Name redacted</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Interviu-3</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;