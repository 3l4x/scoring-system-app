export const FormValidator = async (schema, formValues) => {
    try {
        //success
        await schema.validate(formValues, { abortEarly: false })
        return {};
    }
    catch (err) {
        //failure
/*         console.log('fail');
        console.log(err.inner); */
        return err.inner.reduce((acc, { path, message }) => ({
            ...acc, [path]: (message.charAt(0).toUpperCase() + message.slice(1)).replace(path,'This')
        }), {});
    }
}
