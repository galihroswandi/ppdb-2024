import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { PropTypes } from "prop-types";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const steps = [
  {
    label: "Isi Data Siswa",
  },
  {
    label: "Isi Data Ibu",
  },
  {
    label: "Isi Data Ayah",
  },
  {
    label: "Isi Data Wali",
  },
  {
    label: "Isi Data Asal Sekolah",
  },
  {
    label: "Konfirmasi Data",
  },
];

export default function Form() {
  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <section className="max-w-[90%] mx-auto w-full pt-28 lg:pt-36">
      <Box sx={{ maxWidth: "100%" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <section className="w-[90%] mx-auto bg-white px-6 py-4 my-3 rounded-md shadow-md">
                  <header>
                    <h1 className="font-bold text-xl text-slate-600 mb-3">
                      Data Siswa
                    </h1>
                  </header>
                  <form className="grid gap-3">
                    <InputForm
                      placeholder="Masukan NIS"
                      type="number"
                      labelName="NIS"
                      textHelper="Sesuai dengan data dari rapot."
                      required
                    />
                    <InputForm
                      placeholder="Masukan NISN"
                      type="number"
                      labelName="NISN"
                      textHelper="Sesuai dengan data dari web http://nisn.data.kemdikbud.go.id"
                      required
                    />
                    <InputForm
                      placeholder="Masukan NIK"
                      type="number"
                      labelName="NISN"
                      textHelper="Sesuai dengan kartu keluarga (KK)"
                      required
                    />
                    <InputForm
                      placeholder="Masukan Lengkap"
                      type="text"
                      labelName="Nama-Lengkap"
                      required
                    />
                    <label htmlFor="gender">
                      <span className="text-slate-700">
                        Jenis Kelamin
                        <span className="text-red-500"> *</span>
                      </span>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        className="grid grid-cols-2 gap-3 text-slate-700"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Laki-Laki"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Perempuan"
                        />
                      </RadioGroup>
                    </label>
                    <InputForm
                      placeholder="Tanggal Lahir"
                      type="date"
                      labelName="Tanggal-Lahir"
                      required
                    />
                    <section className="grid mt-4">
                      <button
                        className="flex items-center gap-x-1 justify-center w-full bg-primary-color rounded-md p-2.5 lg:py-3 font-semibold hover:bg-blue-600 mb-3 text-white"
                        type="button"
                        onClick={handleNext}
                      >
                        {index === steps.length - 1 ? "Selesai" : "Selanjutnya"}
                      </button>
                      <button
                        className="flex items-center gap-x-1 justify-center w-full bg-body-color rounded-md p-2.5 lg:py-3 font-semibold mb-3 text-slate-500"
                        type="button"
                        onClick={handleBack}
                        disabled={index === 0}
                      >
                        Kembali
                      </button>
                    </section>
                  </form>
                </section>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </section>
  );
}

const InputForm = ({ placeholder, type, textHelper, labelName, required }) => {
  return (
    <label htmlFor={labelName.toLowerCase()}>
      <span className="text-slate-700">
        {labelName}
        {required && <span className="text-red-500"> *</span>}
      </span>
      <input
        type={type}
        className="border border-[#455A64] py-2 lg:py-3 px-3 w-full rounded-md outline-none text-slate-800"
        placeholder={placeholder}
        id={labelName.toLowerCase()}
        name={labelName.toLowerCase()}
      />
      {textHelper && (
        <span className="text-slate-500 text-xs">{textHelper}</span>
      )}
    </label>
  );
};

InputForm.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  textHelper: PropTypes.string,
  labelName: PropTypes.string,
  required: PropTypes.bool,
};
