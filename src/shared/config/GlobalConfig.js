export const AppConfig = {
  siteName: 'Administración Central'
};

export const FormConfig = {
  DefaultRules: [{required: true, message: 'Por favor ingrese un valor' }],
  DefaultLayout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } },
  DefaultSelectFilter: (input, option) => option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
};

export const MomentConfig = {
  tz: 'America/Argentina/Buenos_Aires',
};