import React from 'react';
import {Card} from 'react-bootstrap';

const Section = (props) => {
	return ( 
		<Card>
			<Card.Body>
				{ !props.title ? null : 
					<Card.Title>{props.title}</Card.Title>
				}
				{ !props.subtitle ? null :
					<Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
				}
				{ !props.body ? null :
					<Card.Text>{props.body}</Card.Text>
				}
			</Card.Body>
		</Card>
	);
}
 
export default Section;