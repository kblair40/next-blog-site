import React from "react";
import Script from "next/script";

import Button from "components/UI/Button";
// import api from "utils/api";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DOCS_API_KEY;
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_DOCS_OAUTH_CLIENT_ID;
// const GOOGLE_DOCS_CLIENT_SECRET = process.env.GOOGLE_DOCS_CLIENT_SECRET;

console.log("ENV VARS:", { API_KEY, CLIENT_ID });

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/documents";

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = "https://docs.googleapis.com/$discovery/rest?version=v1";

const GoogleTest = () => {
  let tokenClient;
  let gapiInited = false;
  let gisInited = false;

  function gapiLoaded() {
    gapi.load("client", intializeGapiClient);
  }

  async function intializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
  }

  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: "", // defined later
    });
    gisInited = true;
    maybeEnableButtons();
  }

  /**
   * Enables user interaction after all libraries are loaded.
   */
  function maybeEnableButtons() {
    if (gapiInited && gisInited) {
      // document.getElementById("authorize_button").style.visibility = "visible";
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleClickAuth() {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      // document.getElementById("signout_button").style.visibility = "visible";
      // document.getElementById("authorize_button").innerText = "Refresh";
      await printDocTitle();
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: "" });
    }
  }

  function handleClickSignout() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken("");
      // document.getElementById("content").innerText = "";
      // document.getElementById("authorize_button").innerText = "Authorize";
      // document.getElementById("signout_button").style.visibility = "hidden";
    }
  }

  async function printDocTitle() {
    try {
      const response = await gapi.client.docs.documents.get({
        documentId: "195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE",
      });
      const doc = response.result;
      console.log("DOC:", doc);
      const output = `Document ${doc.title} successfully found.\n`;
      console.log("\n\nOUTPUT:", output, "\n\n");
      // document.getElementById("content").innerText = output;
    } catch (err) {
      // document.getElementById("content").innerText = err.message;
      return;
    }
  }

  return (
    <div>
      {/* <p className="text-center">Dont mess with these yet, please.</p> */}
      <div className="flex space-x-2 items-center">
        <Button onClick={handleClickAuth}>Authorize</Button>
        <Button onClick={handleClickSignout}>Sign Out</Button>
      </div>

      <Script src="https://apis.google.com/js/api.js" onLoad={gapiLoaded} />
      <Script src="https://accounts.google.com/gsi/client" onLoad={gisLoaded} />
    </div>
  );
};

export default GoogleTest;
