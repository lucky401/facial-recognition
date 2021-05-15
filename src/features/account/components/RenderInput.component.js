import { RenderError } from './RenderError.component';
export const RenderInput = (props) => {
  const err = props.meta.error && props.meta.touched;
  return (
    <div className="flex flex-col">
      <label htmlFor={`input-${props.input.name}`} className="sr-only">
        {props.label}
      </label>
      <input
        {...props.input}
        id={`input-${props.input.name}`}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={`px-4 py-3 rounded-lg ${
          err
            ? 'focus:ring-red-500 border-red-400 focus:border-red-500'
            : 'focus:ring-blue-500 border-gray-300 focus:border-blue-500'
        }`}
      />
      <RenderError {...props.meta} />
    </div>
  );
};
