import * as yup from 'yup';
export const GenerateValidationRules = (data) => {
    const rules =  data.tasks.reduce((acc,{aspects}) => {
        aspects.forEach(({id, type, values, maxValue, required})=>{
            let yupSchema = null;
            //type
            if(type === 'number')
            {
                yupSchema = yup.number();
                yupSchema = yupSchema.integer();
                yupSchema = yupSchema.min(0);
            }
            else if(type === 'boolean')
                yupSchema = yup.boolean();
            else
                yupSchema = yup.string();

            //required
            if(required)
                yupSchema = yupSchema.required()

            if(maxValue !== undefined)
            {
                yupSchema = yupSchema.max(maxValue)
            }

            if(values && type === 'list')
            {
                yupSchema = yupSchema.oneOf(Object.keys(values));
            }
             acc[id] = yupSchema;
        })
        return acc;
    }, {})
    const schema = yup.object().shape(
        rules
    );
    return schema;
}