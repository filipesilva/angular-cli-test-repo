export interface TokenAuthentication {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  id_token: string;
  error: string;
  error_description: string;
  expiration_date: string;
  remember: boolean;
}
