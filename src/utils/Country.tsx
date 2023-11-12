type PropsCountry = {
  label: string;
};
export default function Country({ label }: PropsCountry) {
  if (label) return <>Not found</>;
}
