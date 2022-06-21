import { useState } from "react";
import { useCallback } from "react";
import { Form, FormLayout, Checkbox,TextField,Button,Page,Card,Layout } from "@shopify/polaris";
import HeaderNav from "./HeaderNav";

export default function AddProducts() {
  const [newsletter, setNewsletter] = useState(false);
  const [name, setValue] = useState('');

  const handleSubmit = useCallback((_event) => {
    setEmail('');
    setNewsletter(false);
  }, []);

  const handleNewsLetterChange = useCallback(
    (value) => setNewsletter(value),
    [],
  );

  const handleEmailChange = useCallback((value) => setEmail(value), []);

  return (

    <Page>
      <HeaderNav />
      <Layout>
        <Layout.Section>
          <Card sectioned >
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <Checkbox
                  label="Sign up for the Polaris newsletter"
                  checked={newsletter}
                  onChange={handleNewsLetterChange}
                />
                <TextField
                  value={name}
                  onChange={handleEmailChange}
                  label="Product Title"
                  autoComplete=""
                  helpText={
                    <span>
                      We’ll use this email address to inform you on future changes to
                      Polaris.
                    </span>
                  }
                />
                <Button submit>Submit</Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}