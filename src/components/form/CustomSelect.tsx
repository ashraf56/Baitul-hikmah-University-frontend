import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TCustomSelectProps = {
    label: string;
    name: string;
    placeholder?:string;
    options?: { value: string; label: string; disabled?: boolean }[];
    mode?: 'multiple' | undefined;
  };
const CustomSelect = ({ label, name, options, placeholder ,mode}: TCustomSelectProps) => {
    return (
        <div>
              <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: '100%' }}
            {...field}
            placeholder={placeholder}
            options={options}
            size="large"
            mode={mode}
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
        </div>
    );
};

export default CustomSelect;