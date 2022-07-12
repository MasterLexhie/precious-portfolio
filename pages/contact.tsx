import type { NextPage } from "next";
import Head from "next/head";
import { Field, Form, Formik } from "formik";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const ContactForm = () => {
  const toast = useToast();

  const validate = (value: string) => {
    let error;
    if (!value || value === "") {
      error = `Your name is required`;
    }
    return error;
  };

  const validateEmail = (value: string) => {
    let error;
    if (!value || value === "") {
      error = `Your email is required`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  const validateMessage = (value: string) => {
    let error;
    if (!value || value === "") {
      error = `Your message is required`;
    }
    return error;
  };

  const encode = (data: { [x: string]: string | number | boolean }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (formData: any, action: any) => {
    const formProperty = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: encode({ ...formData }),
    };

    fetch("https://formspree.io/f/xpzbgbbl", formProperty)
      .then(() => {
        action.setSubmitting(false);
        toast({
          position: "top-right",
          title: "Message Sent.",
          description: "Your message has been sent successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        // resetting form after submit
        // add loader to form

        // action.resetForm({
        //   values: {
        //     name: "",
        //     email: "",
        //     message: "",
        //   },
        // });
      })
      .catch(() => {
        toast({
          position: "top-right",
          title: "Message Failed.",
          description: "Your message failed to send",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => console.log("Successfully"));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values: any, actions: any) => handleSubmit(values, actions)}
    >
      {(props) => (
        <Form>
          <Flex flexFlow="column">
            <Field name="name" validate={validate}>
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  mb="25px"
                >
                  <Flex flexFlow="column">
                    <FormLabel htmlFor="name" mb="6px">
                      Name
                    </FormLabel>
                    <Input id="name" {...field} />
                    <FormErrorMessage alignSelf="end">
                      {form.errors.name}
                    </FormErrorMessage>
                  </Flex>
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={validateEmail}>
              {({ field, form }: any) => (
                <FormControl
                  mb="25px"
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <Flex flexFlow="column">
                    <FormLabel htmlFor="email" mb="6px">
                      Email
                    </FormLabel>
                    <Input id="email" {...field} />
                    <FormErrorMessage alignSelf="end">
                      {form.errors.email}
                    </FormErrorMessage>
                  </Flex>
                </FormControl>
              )}
            </Field>
            <Field name="message" validate={validateMessage}>
              {({ field, form }: any) => (
                <FormControl
                  mb="25px"
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <Flex flexFlow="column">
                    <FormLabel htmlFor="message" mb="6px">
                      Message
                    </FormLabel>
                    <Textarea id="message" minH="165px" {...field} />
                    <FormErrorMessage alignSelf="end">
                      {form.errors.message}
                    </FormErrorMessage>
                  </Flex>
                </FormControl>
              )}
            </Field>
            <Button type="submit">Submit</Button>
          </Flex>
          {/* <Field type="text" name="name" validate={validateNameOrMessage(props.values.name, "name")}>
            {({ field, form }) => (
              <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field> */}
          {/* <Field type="email" name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}x
          </Field> */}
        </Form>
      )}
    </Formik>
  );
};

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Precious</title>
        <meta name="description" content="Contact Precious" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ContactForm />
      </Container>
    </>
  );
};

export default Contact;
