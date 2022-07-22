import { Button, Modal, Stack, DropZone, Checkbox } from "@shopify/polaris";
import { useState, useCallback } from "react";

export function ModalExample() {
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleCheckbox = useCallback((value) => setChecked(value), []);

  const activator = <Button onClick={toggleActive}>Import</Button>;

  return (
    <div style={{ height: "20px" }}>
      <Modal
        large
        activator={activator}
        open={active}
        onClose={toggleActive}
        title="Import customers by CSV"
        primaryAction={{
          content: "Upload and continue",
          onAction: toggleActive,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: toggleActive,
          },
        ]}
      >
        <Modal.Section>
          <Stack vertical>
            <DropZone
              accept=".csv"
              errorOverlayText="File type must be .csv"
              type="file"
              onDrop={() => {}}
              showPreviews={true}
              showFileNamesInPreview={true}
            >
              <DropZone.FileUpload />
            </DropZone>
            {/* <Checkbox
              checked={checked}
              label="Overwrite existing customers that have the same email or phone"
              onChange={handleCheckbox}
            /> */}
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
}

