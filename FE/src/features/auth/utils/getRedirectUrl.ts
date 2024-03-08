export const getRedirectUrl = (provider: string) => {
  console.log("provider", provider);
  switch (provider) {
    case "slack": {
      const clientId = process.env.NEXT_PUBLIC_SLACK_CLIENT_ID;
      const redirectUri = process.env.NEXT_PUBLIC_SLACK_REDIRECT_URI;
      const teamId = process.env.NEXT_PUBLIC_TEAM_ID;

      console.log("clientId", clientId);
      console.log("redirectUri", redirectUri);
      console.log("teamId", teamId);

      if (!clientId || !redirectUri || !teamId) {
        throw new Error("Environment variables are not set");
      }

      return `https://slack.com/oauth/v2/authorize?client_id=${clientId}&scope=users.profile:read&redirect_uri=${redirectUri}&state=${teamId}`;
    }
    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
};
