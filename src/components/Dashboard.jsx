import {
    Page,
    Layout,
    Card,
    TextStyle,
    ResourceList,
    Icon,
    Thumbnail,
  } from "@shopify/polaris";
  import React from "react";
  import {
    CustomersMajor
  } from '@shopify/polaris-icons';
  import { ButtonGroup, Button } from "@shopify/polaris";
  
  function Dashboard() {
    return (
      <Page fullWidth title="Dashboard" sectioned >
        <Layout>
          <Layout.Section oneThird>
            <Card sectioned actions={[{ content: "Partner Users", url: "https://bao.agency" }]} >   
            </Card>
          </Layout.Section>

          <Layout.Section oneThird>
            <Card title='Partner Users' sectioned actions={[{ content: "Manage" }]} >   
            </Card>
          </Layout.Section>

          <Layout.Section oneThird>
            <Card title='Partner Users' sectioned actions={[{ content: "Manage" }]} >   
            </Card>
          </Layout.Section>
          {/* <Layout.Section oneThird>
            <Card title="Minneapolis" actions={[{ content: "Manage" }]}>
              <Card.Section>
                <TextStyle variation="subdued">1931 units available</TextStyle>
              </Card.Section>
            </Card>
          </Layout.Section> */}
        </Layout>

        {/* <ButtonGroup>
            <Button icon={CustomersMajor}>Partner Users</Button>
            <Button>Retriee Users</Button>
        </ButtonGroup> */}
      </Page>
    );
  }

  export default Dashboard
  
  