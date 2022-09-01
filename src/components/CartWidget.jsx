import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/material"

const CarWidget = () => {
    return(
        <Badge badgeContent={5} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
            
    )
}

export default CarWidget;