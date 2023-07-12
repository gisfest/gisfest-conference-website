import React from 'react';
import TopBgPattern from '@/components/shared/TopBgPattern';
import Agenda from '@/components/agenda/Agenda';

const AgendaPage = () => {
	return (
		<div className="w-full">
			<TopBgPattern
				pageTitle="Agenda"
				pageDescription="Explore the Exciting Agendas of GISfest2023"
				variant="center"
			/>

			<Agenda />
		</div>
	);
};

export default AgendaPage;
