function Head() {
  return (
    <>
      <title>CG Inside</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/images/.ico" />

      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YJM794YGV2"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YJM794YGV2');
          `,
        }}
      />
    </>
  );
}

export default Head;
