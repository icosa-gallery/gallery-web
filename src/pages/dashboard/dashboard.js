import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"
import PolyConnect from "../../components/polyconnect"
import UploadToPoly from "../../components/upload-to-poly"
import UserSelfAssets from "../../components/user-self-assets"
import "./dashboard.scss"

const UpdatePassword = (props) => {
  return (
    <div>
      <h4>Password</h4>
      <Row>
        <Col xs="12">
          <label htmlFor="oldpassword">Old Password</label>
          <input type="password" name="oldpassword" />
        </Col>
        <Col xs="12">
          <label htmlFor="newpassword">New Password</label>
          <input type="password" name="newpassword" />
        </Col>
      </Row>
    </div>
  )
}

const UpdateUsername = (props) => {
  return (
    <div>
      <h4>Username</h4>
      <Row>
        <Col xs="12">
          <label htmlFor="newusername">New Username</label>
          <input type="text" name="newusername" />
        </Col>
      </Row>
    </div>
  )
}

const UpdateEmail = (props) => {
  return (
    <div>
      <h4>Email</h4>
      <Row>
        <Col xs="12">
          <label htmlFor="newemail">New Email</label>
          <input type="email" name="newemail" />
        </Col>
        <Col xs="12">
          <label htmlFor="newemailconfirm">Confirm Email</label>
          <input type="email" name="newemailconfirm" />
        </Col>
      </Row>
    </div>
  )
}
function Dashboard(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>User profile</h1>
          <hr />
        </Col>
      </Row>
      <Tabs defaultActiveKey="manage" id="uncontrolled-tab-example">
        <Tab eventKey="manage" title="Manage Uploads">
          <h2>Manage Uploads</h2>
          <hr />
          <Row>
            <Col>
              <UserSelfAssets />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="upload" title="Upload">
          <h2>Upload New File</h2>
          <hr />
          <Row>
            <Col>
              <UploadToPoly />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="settings" title="Settings">
          <h2>User Details</h2>
          <hr />
          <Row>
            <Col>
              <hr />
              <UpdateUsername />
              <UpdateEmail />
              <UpdatePassword />
            </Col>
            <Col>
              <h2>Connect with Google Poly</h2>
              <p className="error">
                Note: This functionality will be unavailble from <strong>June 30th 2021</strong>
              </p>
              <p>
                <strong>
                  Google Poly uses internal model urls that have extra user data to display extra data like scene
                  backgrounds, key lights etc. This data is not exposed by the Poly API and so we cannot import it.
                </strong>
              </p>
              <PolyConnect />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Dashboard
