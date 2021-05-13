export const credits = () => {
  const myInfo = [
    `%cSite Developed By :\n\n%c %c %c${process.env.NEXT_PUBLIC_COMPANY_NAME} %c  %c  ${process.env.NEXT_PUBLIC_COMPANY_LINK}   Code with  %c %c %c ${process.env.NEXT_PUBLIC_DEVELOPER_NAME}   %c  %c  ${process.env.NEXT_PUBLIC_DEVELOPER_LINK}     \n\n`,
    "color: #000000; background: #ffffff; font-size:18px;",
    "background: #000000; padding:5px 0;",
    "background: #000000; padding:5px 0;",
    "color: #ffffff; background: #000000; padding:5px 0;",
    "background: #000000; padding:5px 0;",
    "background: #ffffff; padding:5px 0;",
    "background: #ffc107; padding:5px 0;",
    "background: #ffc107; padding:5px 0;",
    "color: #ffffff; background: #ffc107; padding:5px 0;",
    "background: #ffc107; padding:5px 0;",
    "background: #ffffff; padding:5px 0;",
  ];

  if (typeof window !== "undefined") {
    console.log.apply(console, myInfo);
  }
};

export default credits;
