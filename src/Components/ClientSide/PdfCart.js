import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useShoppingCart } from "use-shopping-cart";

const PdfCard = () =>
{
    const {cartDetails, totalPrice} = useShoppingCart();
    const generatePDF = (tableRows, columns, isLandScape) =>
    {
        const doc = jsPDF({
            orientation : isLandScape? "landscape": 'portrait'
        });

        doc.autoTable({
            head : columns,
            body : tableRows,
            startY : 20,
            headStyles : {
                fillColor: [241, 196, 15],
                fontSize: 12,
                halign: 'center'
            },
            columnStyles : 
            {
                0: { cellWidth: 30, cellHeight: 20, halign: 'center' },
                1: { cellWidth:'auto',halign:'center',fontStyle:'bold' },
                2: { cellWidth:30, halign:'center'},
                3: { cellWidth: 30, halign: 'center' },
                4: { cellWidth: 30, halign: 'center' }
            },
            styles : 
            {
                valign : 'middle'
            },
            didParseCell : function(data)
            {
                if(data.section == 'body')
                    data.row.height = 20;
                if(data.column.dataKey == 'image')
                {
                    data.cell.text = ''
                    data.cell.raw = `${data.cell.raw}`
                }
            },
            didDrawCell : function(data)
            {
                if(data.row.section == 'body' && data.column.dataKey == 'image' && data.cell.raw)
                {
                    doc.addImage(data.cell.raw,"PNG",data.cell.x + 5, data.cell.y + 2, 13, 16)
                }
            }
        });
        const date = Date().split(" ");
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        doc.text(`Total : ${totalPrice.toFixed(3)}TND`,14,15);
        doc.save(`report_${dateStr}.pdf`);
    };
    const columnsPDF = [{
        image : "Image",
        title : "Designation",
        quantity : "Quantité",
        price : "Prix",
        STotal : "S/Total" 
    }];

    return (
        <div>
            <button 
                style={{"color":"yellow", backgroundColor:"teal",height:70, position:'fixed',top:150, left:150, cursor: 'pointer'}}
                onClick={() => 
                    generatePDF(Object.values(cartDetails).map(elt => ({
                        image : elt.image,
                        title : elt.Title,
                        quantity : elt.quantity,
                        price : elt.price,
                        STotal : (elt.price * elt.quantity).toFixed(3)
                    })),columnsPDF, true)
                }
            >
                Download PDF
            </button>
        </div>
    );
}
export default PdfCard;