import React, {Component} from 'react';
import "./css/Footer.css";
import DynamicLink from "./DynamicLink";

class Footer extends Component {
    render() {

        return (
            <div className="Footer">
                <div className="footer-columns">
                    <div className="footer-column">
                        <p>
                            Site
                        </p>
                        <DynamicLink to="/">
                            Index
                        </DynamicLink>
                        <DynamicLink to="/docs">
                            Documentation
                        </DynamicLink>
                        <DynamicLink to="https://goo.gl/cFs5M9">
                            Add FredBoat
                        </DynamicLink>
                    </div>

                    <div className="footer-column">
                        <p>
                            Social
                        </p>
                        <DynamicLink to="https://discordapp.com/invite/cgPFW4q">
                            Discord
                        </DynamicLink>
                        <DynamicLink to="https://twitter.com/DiscordFredBoat">
                            Twitter
                        </DynamicLink>
                        <DynamicLink to="https://crowdin.com/project/fredboat">
                            Translations
                        </DynamicLink>
                    </div>

                    <div className="footer-column">
                        <p>
                            Legal
                        </p>
                        <DynamicLink to="/docs/terms">
                            Terms of Use
                        </DynamicLink>
                        <DynamicLink to="https://botlabs.gg/end-user-license-agreement">
                            EULA
                        </DynamicLink>
                        <DynamicLink to="https://botlabs.gg/copyright-dispute-policy">
                            Copyright Disputes
                        </DynamicLink>
                    </div>

                    <div className="footer-column">
                        <p>
                            Privacy
                        </p>
                        <DynamicLink to="https://botlabs.gg/privacy-policy">
                            Privacy Policy
                        </DynamicLink>
                        <DynamicLink to="https://botlabs.gg/cookie-policy">
                            Cookie Policy
                        </DynamicLink>
                        <DynamicLink to="https://botlabs.gg/gdpr-privacy-notice">
                            GDPR Notice
                        </DynamicLink>
                    </div>
                </div>
                <p className="copyright-statement">
                    FredBoat.com, a service provided by <a href="https://botlabs.gg">BotLabs.gg</a> | All Rights Reserved
                </p>
            </div>
        )
    }
}

export default Footer;
