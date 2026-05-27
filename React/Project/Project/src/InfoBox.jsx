import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox( {info} ){
    // let info = {
    //     city:"Jaipur",
    //     feelslike:24.25,
    //     temp:25.05,
    //     tempMin:25.05,
    //     tempMax:25.05,
    //     humidity:47,
    //     weather:"haze"
    // };


     const INIT_URL= "https://tse4.mm.bing.net/th/id/OIP.YswN5n561_0a9Q0nfLQkmAHaE9?pid=Api&P=0&h=180";

     const HOT_URL ="https://tse3.mm.bing.net/th/id/OIP.8wP7ufnUAx2fSLZBo9AGWwHaHa?pid=Api&P=0&h=180";
     const COLD_URL ="https://tse4.mm.bing.net/th/id/OIP.yHwgAuC5uFGkFsGInh086wHaEK?pid=Api&P=0&h=180";
     const Rain_URL ="https://tse2.mm.bing.net/th/id/OIP.kC5g-P1uGu4svd3Qj2A1IwHaE7?pid=Api&P=0&h=180";

      const getIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon />;
        if (info.temp > 15)     return <SunnyIcon />;
        return <AcUnitIcon />;
    };
    return(
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className='CardContainer'>
                   <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    // image= {INIT_URL}
                   image={
                        info.humidity > 80
                            ? RAIN_URL
                            : info.temp > 15
                            ? HOT_URL
                            : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} &nbsp; {
                        getIcon()
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary'  }}component={"span"} >
                        <div> Temperature : {info.temp}&deg; C</div>
                        <div> Minimum Temperature : {info.tempMin}&deg; C</div>
                        <div> Maximum Temperature : {info.tempMax}&deg; C</div>
                        <div> Humidity: {info.humidity}</div>
                        <div>The Weather can be Described as = <i>{info.weather} </i>  feels like = {info.feelsLike}&deg; C</div>

                    </Typography>
                </CardContent>
                
                </Card>
            </div>
          

        </div>
    );


}