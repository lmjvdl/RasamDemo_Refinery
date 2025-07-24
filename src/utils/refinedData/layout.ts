export const parts = {
    turbine: [
        'Turbine_Outlet_Temprature',
        'Turbine_Inlet_Temprature',
        'Turbine_Pressure_Inlet',
        'Turbine_Pressure_Outlet',
    ],
    compressor: [
        'Compressor_Suction_Temp',
        'Compressor_Discharge_Temprature',
        'Compressor_Suction_Pressure',
        'Compressor_Discharge_Pressure',
        'Compressor_Air_Flow_Rate',
    ],
    radiator: ['Oil_Pressure_Discharge', 'Oil_Temprature_Outlet'],
    pipe: ['Speed'],
} as const;

export const partTranslations: Record<keyof typeof parts, string> = {
    turbine: 'توربین',
    compressor: 'کمپرسور',
    radiator: 'رادیاتور',
    pipe: 'لوله',
};

export const labelTranslations: Record<string, string> = {
    Turbine_Outlet_Temprature: 'دما خروجی توربین',
    Turbine_Inlet_Temprature: 'دما ورودی توربین',
    Turbine_Pressure_Inlet: 'فشار ورودی توربین',
    Turbine_Pressure_Outlet: 'فشار خروجی توربین',
    Compressor_Suction_Temp: 'دما مکش کمپرسور',
    Compressor_Discharge_Temprature: 'دما خروجی کمپرسور',
    Compressor_Suction_Pressure: 'فشار مکش کمپرسور',
    Compressor_Discharge_Pressure: 'فشار خروجی کمپرسور',
    Compressor_Air_Flow_Rate: 'دبی هوای کمپرسور',
    Oil_Pressure_Discharge: 'فشار خروجی روغن',
    Oil_Temprature_Outlet: 'دما خروجی روغن',
    Speed: 'سرعت',
};
