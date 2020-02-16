/* eslint-disable */
import React from 'react';
import Modal from 'wix-style-react/Modal';
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';
import Checkbox from "../../../Checkbox";

class PageExample extends React.Component {
  state = {
    isModalOpened: false,
  };

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  render() {
    const { isModalOpened } = this.state;
    return (
      <Box>
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal isOpen={isModalOpened} onRequestClose={this.closeModal}>
          <Box width="1254px">
            <CustomModal
              title="Title"
              removeContentPadding
              primaryButtonText="Save"
              primaryButtonOnClick={this.closeModal}
              secondaryButtonText="Cancel"
              secondaryButtonOnClick={this.closeModal}
              onClose={this.closeModal}
            >
              <Page upgrade height="40vh" >
                <Page.Header/>
                <Page.Content>
                  <Container>
                    <Row>
                      <Card>
                        <Card.Header title="Card" />
                        <Card.Content>Some content</Card.Content>
                      </Card>
                    </Row>
                  </Container>
                </Page.Content>
              </Page>
            </CustomModal>
          </Box>
        </Modal>
      </Box>
    );
  }
}

