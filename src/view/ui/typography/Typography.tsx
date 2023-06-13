export default function Typography(props: InputPropType) {
  const { CustomClass, text, children } = props;

  return (
    <p className={`text-gray-600 dark:text-gray-400 ${CustomClass}`}>
      {text || children}
    </p>
  );
}

type InputPropType = {
  CustomClass?: string;
  text?: string;
  children?: any;
};
