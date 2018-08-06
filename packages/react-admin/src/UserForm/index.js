import React from 'react';
import {
    BooleanField,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    DeleteButton,
    Filter,
    FormTab,
    List,
    LongTextInput,
    NullableBooleanInput,
    NumberField,
    ReferenceManyField,
    Responsive,
    TabbedForm,
    TextField,
    TextInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/icons/Person';

const Title = ({ record = {} }) =>
    record ? <div>{record.name}</div> : null;

const listStyles = {
    nb_commands: { color: 'purple' },
};

const list = withStyles(listStyles)(({ classes, ...props }) => (
    <List
        {...props}
        // filters={<VisitorFilter />}
        // sort={{ field: 'last_seen', order: 'DESC' }}
        // perPage={25}
    >
      <Datagrid>
        <TextField source="Name" />
        <TextField source="Age" />
        <TextField source="Nickname" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
));

const editStyles = {
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32 },
    email: { width: 544 },
    address: { maxWidth: 544 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const create = withStyles(editStyles)(({ classes, ...props }) => (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Info">
          <TextInput
              source="Name"
              formClassName={classes.name}
          />
          <TextInput
              source="Age"
              formClassName={classes.name}
          />
          <TextInput
              source="Nickname"
              formClassName={classes.name}
          />
        </FormTab>
      </TabbedForm>
    </Create>
));

const edit = withStyles(editStyles)(({ classes, ...props }) => (
  <Edit {...props}>
  <TabbedForm>
    <FormTab label="Info">
      <TextInput
          source="Name"
          formClassName={classes.name}
      />
      <TextInput
          source="Age"
          formClassName={classes.name}
      />
      <TextInput
          source="Nickname"
          formClassName={classes.name}
      />
    </FormTab>
  </TabbedForm>
  </Edit>
));

export default {
  list,
  create,
  edit
}
