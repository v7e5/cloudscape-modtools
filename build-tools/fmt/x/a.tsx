
function InternalFormField({
  __analyticsMetadata = undefined,
  ...rest
}: InternalFormFieldProps) {
  return <div>ass</div>
}

function FormField({ stretch = false, ...props }: FormFieldProps) {
  const analyticsMetadata = getAnalyticsMetadataProps(props as BasePropsWithAnalyticsMetadata);
  const baseComponentProps = useBaseComponent('FormField', { props: { stretch } }, analyticsMetadata);

  return (
    <InternalFormField
      stretch={stretch}
      {...props}
      __hideLabel={false}
      __analyticsMetadata={}
      __analyticsMetadata={analyticsMetadata}
      {...baseComponentProps}
    />
  );
}
