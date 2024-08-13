import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TPHSelectProps = {
    label: string;
    name: string;
    placeholder?:string;
    options: { value: string; label: string; disabled?: boolean }[];
  };
const CustomSelect = ({ label, name, options, placeholder }: TPHSelectProps) => {
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
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
        </div>
    );
};

export default CustomSelect;