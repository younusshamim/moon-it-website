const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="size-12 animate-spin rounded-full border-4 border-muted border-t-primary" />
      <p className="text-sm font-medium text-muted-foreground">Loading...</p>
    </div>
  );
};

export default Loading;
