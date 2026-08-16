'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useForm } from 'react-hook-form';

const fields = [
	{ id: 'first-name', name: 'first_name', label: 'First name', autoComplete: 'given-name', required: true },
	{ id: 'last-name', name: 'last_name', label: 'Last name', autoComplete: 'family-name' },
	{ id: 'email', name: 'email', label: 'Email', autoComplete: 'email', type: 'email', required: true, wide: true },
	{ id: 'company', name: 'company', label: 'Company', autoComplete: 'organization', wide: true },
];

const inputClass = 'w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-base text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-100 focus:outline-none focus:ring-0';

const ContactForm = () => {
	const [open, setOpen] = useState(false);
	const [submitError, setSubmitError] = useState(false);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

	const onSubmit = async (data) => {
		setSubmitError(false);
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			const result = await response.json();
			if (result.status !== 'success') throw new Error('Submission failed');
			reset();
			setOpen(true);
		} catch {
			setSubmitError(true);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2" noValidate>
				{fields.map((field) => (
					<div key={field.name} className={field.wide ? 'sm:col-span-2' : undefined}>
						<label htmlFor={field.id} className="text-base font-medium text-neutral-100 sm:text-sm">{field.label}</label>
						<input
							type={field.type || 'text'}
							id={field.id}
							name={field.name}
							autoComplete={field.autoComplete}
							aria-invalid={errors[field.name] ? 'true' : undefined}
							className={inputClass}
							{...register(field.name, { required: field.required })}
						/>
						{errors[field.name] ? <p className="pt-2 text-base text-red-700 sm:text-sm">This field is required.</p> : null}
					</div>
				))}
				<div className="sm:col-span-2">
					<div className="flex items-baseline justify-between gap-4">
						<label htmlFor="message" className="text-base font-medium text-neutral-100 sm:text-sm">How can I help?</label>
						<p className="text-base text-neutral-500 sm:text-sm">Max. 500 characters</p>
					</div>
					<textarea id="message" name="message" rows={5} maxLength={500} aria-invalid={errors.message ? 'true' : undefined} className={inputClass} {...register('message', { required: true })} />
					{errors.message ? <p className="pt-2 text-base text-red-700 sm:text-sm">Tell me a little about the project.</p> : null}
				</div>
				<div className="grid gap-4 sm:col-span-2 sm:justify-items-start">
					<button type="submit" disabled={isSubmitting} className="bg-neutral-100 px-4 py-3 text-base font-medium text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100 disabled:cursor-wait disabled:opacity-50 sm:text-sm">
						{isSubmitting ? 'Sending…' : 'Send message'}
					</button>
					{submitError ? <p className="text-base text-red-700 sm:text-sm">Something went wrong. Please try again.</p> : null}
				</div>
			</form>

			<Dialog open={open} onClose={setOpen} className="relative z-50">
				<div className="fixed inset-0 bg-black/70" aria-hidden="true" />
				<div className="fixed inset-0 grid place-items-center overflow-y-auto p-5">
					<DialogPanel className="w-full max-w-lg bg-neutral-900 p-8 ring-1 ring-white/10 sm:p-10">
						<DialogTitle className="text-3xl font-medium tracking-tight text-balance text-neutral-100">Thanks.</DialogTitle>
						<p className="pt-5 text-lg text-pretty text-neutral-400 sm:text-base">I’m looking forward to talking with you and will be in touch within one business day.</p>
						<button type="button" onClick={() => setOpen(false)} className="mt-8 border-b border-neutral-100 pb-1 text-base text-neutral-100 sm:text-sm">Close</button>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
};

export default ContactForm;
