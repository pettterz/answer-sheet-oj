import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Choices from '../Components/Choices';
import { Stack } from '@mui/system';
import Question from '../Components/Question';
import { useEffect, useState } from 'react';


const Sheet = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [corrects, setCorrects] = useState(["A"]);
  const [options, setOptions] = useState([""]);
  const [answers, setAnswers] = useState(["B", "C"]);

  useEffect(() => {
    setOptions([
      "AWS CDKを使用して、API GatewayとLambda関数をデプロイします。コードを変更する必要がある場合は、AWS CloudFormationスタックを更新し、新しいバージョンのAPIとLambda関数を展開します。カナリアリリース戦略に は、Route 53のフェイルオーバールーティングポリシーを使用します。",
      "AWS CDKを使用して、API GatewayとLambda関数をデプロイします。コードを変更する必要がある場合は、AWS CloudFormationスタックを更新し、新しいバージョンのAPIとLambda関数を展開します。カナリアリリース戦略に は、Route 53のフェイルオーバールーティングポリシーを使用します。",
      "AWS CDKを使用して、API GatewayとLambda関数をデプロイします。コードを変更する必要がある場合は、AWS CloudFormationスタックを更新し、新しいバージョンのAPIとLambda関数を展開します。カナリアリリース戦略に は、Route 53のフェイルオーバールーティングポリシーを使用します。",
      "AWS CDKを使用して、API GatewayとLambda関数をデプロイします。コードを変更する必要がある場合は、AWS CloudFormationスタックを更新し、新しいバージョンのAPIとLambda関数を展開します。カナリアリリース戦略に は、Route 53のフェイルオーバールーティングポリシーを使用します。",
    ]);
  }, []);

  const handleSubmit = () => {
    setShowAnswer(true);
    setCorrects(["A"]);
    setAnswers(["A", "B"]);
  }

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Question />
          {/* {!showAnswer && 
            <Choices
              showAnswer={showAnswer}
              corrects={corrects}
              options={options}
            />
          } */}

          <Choices
            showAnswer={showAnswer}
            corrects={corrects}
            submitedAnswers={answers}
            options={options}
          />
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          {!showAnswer && 
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleSubmit}>Submit</Button>
              <Button variant="outlined">Not sure</Button>
            </Stack>
          }
          {showAnswer && 
            <Stack spacing={2} direction="row">
              <Button variant="contained">Next</Button>
            </Stack>
          }
        </Grid>
      </Container>
    </main>
  );
}

export default Sheet;
