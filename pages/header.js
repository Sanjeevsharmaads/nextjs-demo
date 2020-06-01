import styles from "./header.module.css";
import Head from "next/Head";

function header() {
  return (
    <div>
      <Head>
        <title>Bootstrap Link</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
      </Head>
      <div className={styles.containerFluid}>
        <div className={[styles.row, styles.topHeader, styles.keena].join(" ")}>
          <div className="col-sm-6">
            <div
              className={[styles.dFlex, styles.justifyContentBetween].join(" ")}
            >
              <div className={styles.topHeaderTitle}>Ribbon</div>
              <div className={styles.verticalLine}></div>
              <div
                className={[styles.inputSearch, styles.topHeaderSearch].join(
                  " "
                )}
              >
                <input
                  type="text"
                  className={[
                    styles.formControl,
                    styles.input,
                    styles.textBody2,
                    styles.icon,
                    styles.iconSearch,
                    styles.searchInput,
                  ].join(" ")}
                  autocomplete="off"
                  placeholder="Search by SKU, Title or Description"
                  value=""
                />
                <div className={styles.inputSearchDropdown}></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div  className={[styles.dFlex, styles.justifyContentEnd].join(
                  " "
                )}>
              <div  className={[styles.textBody3, styles.item, styles.active].join(
                  " "
                )}>
                <a href="/Marketplace" target="_self">
                  SHOP
                </a>
              </div>
              <div className={styles.item}>
                <div
                   className={[styles.roundedCircle, styles.textBody1, styles.bgImg, styles.avatar].join(
                    " "
                  )}
                  style={{backgroundImage: 'url("/static/vinit.jpg")'}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
