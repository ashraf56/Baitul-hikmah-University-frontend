/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";



type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  resolver?: any;
};


const CustomForm = ({ onSubmit, children, resolver }: TFormProps) => {
  const formConfig: any = {};
  if (resolver) {
    formConfig['resolver'] = resolver
  }

  const methods = useForm(formConfig)

  const submit:SubmitHandler<FieldValues> = (data) => {
  onSubmit(data) ;
  methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>{children}</Form>
    </FormProvider>
  );
};

export default CustomForm;