import React from 'react';
import { Collapse,
    Stack,
    Button,
    List,
    ListItem,
    ListIcon
    } from '@chakra-ui/core';

export default function Features() {
    const [show, setShow] = React.useState(false);

    const handleToggle = () => setShow(!show);
  
    return (
      <>
      <Stack maxWidth={600} margin="auto" spacing={5} marginTop={5}>
        <Button onClick={handleToggle} margin="auto">
          Pending Features
        </Button>
        <Collapse mt={4} isOpen={show}>
        <List spacing={3}>
            <ListItem>
            <ListIcon icon="settings" />
                Implement user authentication
            </ListItem>
            <ListItem>
            <ListIcon icon="settings" />
                Modal scrolling arrow buttons
            </ListItem>
            <ListItem>
            <ListIcon icon="settings" />
                Improve thumbnails (better representation of whole photo)
            </ListItem>
            <ListItem>
            <ListIcon icon="settings"/>
                Thumbnail image bordering and shadowing, and reducing grid gap?
            </ListItem>
            <ListItem>
            <ListIcon icon="settings"/>
                Allow set bulk import of images from Instagram account.
            </ListItem>
            <ListItem>
            <ListIcon icon="settings"/>
                Dynamically sourced fields with dropdowns for dog age and breed.
            </ListItem>
        </List>
        </Collapse>
        </Stack>
      </>
    );
  }