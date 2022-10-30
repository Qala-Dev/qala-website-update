interface Props {
  text: string;
}
export default function SubTitle({ text }: Props) {
  return (
    <h3 className="text-lg lg:text-2xl font-semibold text-blue">{text}</h3>
  );
}
