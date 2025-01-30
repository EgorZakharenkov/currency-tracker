import { ChangeEvent, Component } from 'react';

import { ButtonGroup, Field, FormContainer, FormTitle, Label } from '@/components/CandleEditor/styled';
import { Button } from '@/components/Convertor/styled';
import { Input } from '@/components/ui/Input/styled';

interface CandleData {
  o: number;
  h: number;
  l: number;
  c: number;
}

interface CandleEditFormProps {
  selectedCandle: CandleData;
  onChange: (e: ChangeEvent<HTMLInputElement>, key: keyof CandleData) => void;
  onSave: () => void;
  onCancel: () => void;
}

export class CandleEditForm extends Component<CandleEditFormProps> {
  fields: (keyof CandleData)[] = ['o', 'h', 'l', 'c'];
  labels = [{ o: 'Open' }, { h: 'Height' }, { l: 'Low' }, { c: 'Close' }];

  handleInputChange = (field: keyof CandleData) => (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(e, field);
  };

  render() {
    const { selectedCandle, onSave, onCancel } = this.props;

    return (
      <FormContainer>
        <FormTitle>Edit Candle</FormTitle>
        {this.fields.map((field, index) => (
          <Field key={field}>
            <Label>{this.labels[index][field]}:</Label>
            <Input type="number" value={selectedCandle[field]} onChange={this.handleInputChange(field)} />
          </Field>
        ))}
        <ButtonGroup>
          <Button onClick={onSave}>Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ButtonGroup>
      </FormContainer>
    );
  }
}
