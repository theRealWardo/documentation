import React, { useState } from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import styles from "./styles.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Icon from "@material-ui/core/Icon";
import ContributionIcon from "../../../../static/img/contribution.svg";

const MyModal = (props) => {
  const [other, setOther] = useState(false);
  const [feedbackSubmited, setfeedbackSubmited] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  let title,whatWeDo,easyRadio, solvedRadio,otherRadio;
  
  if (!props.show) {
    return null;
  }
  
  otherRadio = "Other";

  if(props.positiveFeedback){
    title = "What do you like about this doc?";
    easyRadio = "Easy to understand";
    solvedRadio = "Solved my problem";
    whatWeDo = "Let us know what we do well:";
  }
  else{
    title = "What you do NOT like about this doc?";
    easyRadio = "Hard to understand";
    solvedRadio = "Did NOT solved my problem";
    whatWeDo = "Let us know what we can improve:";
    
  }

  return (
      <div className={styles.modal} onClick={props.onClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {!feedbackSubmited ? (
          <div>
              <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
            </div>): 
            
            (<div className={styles.modalBody}>
              <div className={styles.feedbackSubmited}>
              <Icon className={styles.feedbackSubmitedIcon}>checkmark</Icon><br/>
              Thank you for submitting your feedback.
              <button onClick={props.onClose}  className={clsx("button", styles.closeButton)}>Close</button>
              </div>
              
              

            </div>)}
            
          </div>
          
      </div>
  );
};

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  const { editUrl } = metadata;
  const [show, setShow] = useState(false);
  const [positiveFeedback, setPositiveFeedback] = useState(true);
  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          {/* BEGIN COMPONENT SWIZZLING. Add link to repository.
           */}
          <section className={styles.issueLinkSeparator}>
            <BrowserOnly>
              {() => (
                <div className="row">
                  <div>
                    
                  </div>
                  <div className={clsx("col", styles.feedBackSection)}>
                    <div>Was this page helpful ?</div>

                    <div>
                      <button
                        className={
                          styles.mailIcon + " " + styles.thumbsUpSeparator
                        }
                        onClick={() => {setShow(true); setPositiveFeedback(true);}}
                      >
                        <Icon>thumb_up</Icon>
                      </button>

                      <button
                        className={
                          styles.mailIcon + " " + styles.thumbsUpSeparator
                        }
                        onClick={() => {setShow(true); setPositiveFeedback(false);}}
                      >
                        <Icon>thumb_down</Icon>
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <a
                      href={
                        "mailto:rp-docs-feedback@redpanda.com?subject=Documentation Feedback&body=Doc url: " +
                        window.location.href
                      }
                    >
                      <Icon className={styles.mailIcon}>email</Icon>
                      <span> Share your feedback</span>
                    </a>
                  </div>
                  <div className={clsx("col", styles.reportIssueText)}>
                    <a
                      href={editUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={styles.contributionIcon}
                    >
                      <ContributionIcon />
                      <span> Make a contribution</span>
                    </a>
                  </div>
                  <MyModal onClose={() => setShow(false)} show={show} positiveFeedback={positiveFeedback} className={styles.mymodal}></MyModal>
                </div>
              )}
            </BrowserOnly>
          </section>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
