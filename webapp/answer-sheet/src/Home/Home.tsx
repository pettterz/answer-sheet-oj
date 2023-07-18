import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAnswerSheet, fetchQuizzes } from '../services/fetch';
import { Quiz, Sheet } from '../services/types';
import { async } from 'q';

const APP_NAME = "Answer Sheet";

const Home = () => {
  const [quizzes, setQuizzes] = useState([] as Quiz[]);
  // const [sheets, setSheets] = useState([] as Sheet[]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const fetchedQuizzes = await fetchQuizzes();

      setQuizzes(fetchedQuizzes);
    }

    const fetchSheets = async () => {
      // Fetch and set sheets
      const quizzesPromises = quizzes.map(async (quiz) => {
        const fetchedSheets = await fetchAnswerSheet(quiz.id);
        quiz.sheets = fetchedSheets;
        return quiz;
      });
      const updatedQuizzes = await Promise.all(quizzesPromises);
      setQuizzes(updatedQuizzes);
    }

    fetchQuiz();
    fetchSheets();
  }, []);

  const renderCards = () => (
    quizzes.map((quiz) => (
      <Grid item key={quiz.id} xs={12} sm={12} md={6}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image="https://source.unsplash.com/random?wallpapers"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {quiz.name}
            </Typography>
            <Typography>
              {quiz.sheets ? quiz.sheets[0].name : "Not answered"} 
              {/* Need to show the sheets infos */}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/answer">
              <Button size="small">Go to latest sheet</Button>
              <Button size="small">Summary</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    ))
  );

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {APP_NAME}
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Practice makes perfect.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          { renderCards() }
        </Grid>
      </Container>
    </main>
  );
}

export default Home;
