import * as React from "react";

export const EmailTemplate = ({
  fname,
  lname,
  email,
  comment,
}: {
  fname: string;
  lname: string;
  email: string;
  comment: string;
}) => (
  <div>
    <h1>You got a message!</h1>
    <p>
      Hello I&apos;m {fname} {lname}.
    </p>
    <br />
    <p>{comment}</p>
    <br />
    <p>Reach me at {email}</p>
  </div>
);
