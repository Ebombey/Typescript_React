type userLoginCredentialsType = {
  email: string;
  password: string;
};

type userAccountCreationType = {
  name: string;
} & userLoginCredentialsType;

type createPost = {
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  status: string;
  userId: string;
};

export type { userLoginCredentialsType, userAccountCreationType, createPost };
