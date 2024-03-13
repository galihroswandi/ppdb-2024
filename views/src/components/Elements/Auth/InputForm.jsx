import PropTypes from "prop-types";

const InputForm = (props) => {
  const { imgUrl, placeholder, type, classWrapper, autoFocus } = props;

  return (
    <div className={`input-form w-full flex ${classWrapper}`}>
      <section className="icon-wrapper border-l border-t border-b border-[#455A64] rounded-l-md pl-3 flex justify-center items-center">
        <img src={imgUrl} alt={`${placeholder} Icon`} width={24} height={24} />
      </section>
      <input
        type={type}
        name={placeholder.toLowerCase()}
        id={placeholder.toLowerCase()}
        placeholder={placeholder}
        autoComplete="off"
        className="border-t border-b border-r border-[#455A64] py-2 lg:py-3 px-3 w-full rounded-r-md outline-none text-slate-800"
        autoFocus={autoFocus}
      />
    </div>
  );
};
InputForm.propTypes = {
  imgUrl: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  classWrapper: PropTypes.string,
  autoFocus: PropTypes.bool,
};

export default InputForm;
