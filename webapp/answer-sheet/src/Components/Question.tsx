import Typography from '@mui/material/Typography';

const Question = () => (
  <>
    <Typography
      component="h5"
      variant="h5"
      align="center"
      color="text.primary"
      gutterBottom
    >
      Question No.1 
    </Typography>
    <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
    ある企業は、Amazon EC2でホストされているコンテンツ共有Webアプリケーションをサーバーレスアーキテク チャに移行したいと考えています。同社は現在、EC2インスタンスの新しいAuto Scalingグループと新しいElastic Load Balancerを作成し、Amazon Route53加重ルーティングポリシーを使用してトラフィックをシフトすることで、アプリケー ションに変更を展開しています。
    新しいサーバーレスアプリケーションでは、Amazon API GatewayとAWS Lambdaの使用を計画しています。同社は、 新しいアプリケーションで動作するように展開プロセスを更新する必要があります。また、機能をユーザーベース全体に 展開する前に、少数のユーザーで新機能をテストする機能を保持する必要があります。 どの展開戦略がこれらの要件を満たしますか?
    </Typography>
  </>
);

export default Question;